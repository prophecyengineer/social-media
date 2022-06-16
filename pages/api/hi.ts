 const streamString = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoibG90dGllIn0.1GfqRl6bJFhK-oQdsbHM-GVBvDLhROxp0Gi1N1qLC40";
  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY as string;
  const appID = process.env.NEXT_PUBLIC_STREAM_APP_ID as string;
  const apiSecret = process.env.REACT_APP_STREAM_APP_SECRET as string;


let stream = require('getstream');

export default async (req, res) => {


// npm install getstream --save
// let stream = require('getstream');


}