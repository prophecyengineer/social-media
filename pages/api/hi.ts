 const streamString = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoibG90dGllIn0.1GfqRl6bJFhK-oQdsbHM-GVBvDLhROxp0Gi1N1qLC40";
  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY as string;
  const appID = process.env.NEXT_PUBLIC_STREAM_APP_ID as string;
  const apiSecret = process.env.REACT_APP_STREAM_APP_SECRET as string;

  export default async (req, res) => {

let stream = require('getstream');
const client = stream.connect(apiKey, appID, apiSecret);
let feed = client.feed('timeline', 'lottie');
feed.addActivity({
    'actor': client.user('lottie').ref(),
    'verb': 'post',
    'object': 'I love this picture',
    'attachments': {
        'og': {
            'title': 'Crozzon di Brenta photo by Lorenzo Spoleti',
            'description': 'Download this photo in Italy by Lorenzo Spoleti',
            'url': 'https://unsplash.com/photos/yxKHOTkAins',
            'images': [
                {
                    'image': 'https://goo.gl/7dePYs'
                }
            ]
        }
    }
})
  }