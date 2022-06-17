import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
import { connect } from "getstream";
import stream from "stream";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY as string;
const apiSecret = process.env.REACT_APP_STREAM_APP_SECRET as string;
const appID = process.env.NEXT_PUBLIC_STREAM_APP_ID as string;
//     process.env.REACT_APP_STREAM_APP_SECRET,
//     process.env.REACT_APP_STREAM_APP_ID,
//     { location: 'us-east' },

const client = connect(apiKey, apiSecret);

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  if (req.method === "POST") {
    const { name, username, email, password } = req.body;

    try {
   
      const hash = await bcrypt.hash(password, 0);
      //this DID add a user!!!
      // const userFeedToken = client.createUserToken(username.username);
      const userFeedToken = client.user(username.username);
         // const appToken = client.createUserToken(`${name}`);
        //  const userFeed = client.feed("user", client.userId);

        // const userFeedToken = '1234';
        const userHomeToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZSI6IioiLCJhY3Rpb24iOiIqIiwiZmVlZF9pZCI6IioifQ.XmMcy2JB1MFD2UpVZbWmdwROpwYzU_YQM-LCAd1e0rM';
        const userNotifyToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZSI6IioiLCJhY3Rpb24iOiIqIiwiZmVlZF9pZCI6ImhvbWVvbmUifQ._mz7Xd4j4B0h3r7Rtrp4AWpsHtGD67iV61h8_hR2Z8g';
      // const userFeedToken = client.createUserToken(username);
      // const userHomeToken = client.feed('home', username)

      // console.log(userFeedToken);
      // const userNotifyToken = client.feed('notification',username);
      // console.log("make a feed, home and notify token with", username, userFeedToken, userHomeToken, userNotifyToken);
      await prisma.users.create({
        data: {
          name: name,
          username: username,
          email: email,
          password: hash,
          userFeedToken: userFeedToken,
          userHomeToken: userHomeToken,
          userNotifyToken: userNotifyToken,
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
