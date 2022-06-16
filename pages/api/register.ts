import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
import { connect } from "getstream";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY as string;
const apiSecret = process.env.REACT_APP_STREAM_APP_SECRET as string;
//     process.env.REACT_APP_STREAM_APP_SECRET,
//     process.env.REACT_APP_STREAM_APP_ID,
//     { location: 'us-east' },

const client = connect(apiKey, apiSecret);

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  if (req.method === "POST") {
    const { name, username, email, password } = req.body;

    try {
      // const appToken = client.createUserToken(`${name}`);
      const userToken = client.createUserToken(username);
      console.log("make a stream token with", username, userToken);
      const hash = await bcrypt.hash(password, 0);
      await prisma.users.create({
        data: {
          name: name,
          username: username,
          email: email,
          password: hash,
          userToken: userToken,
        },
      });

      return res.status(200).end();
    } catch (err) {
      return res.status(503).json({ err: err.toString() });
    }
  } else {
    return res
      .status(405)
      .json({ error: "This request only supports POST requests" });
  }
};
