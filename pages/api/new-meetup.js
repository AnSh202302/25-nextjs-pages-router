// /api/new-meetup
import { MongoClient } from "mongodb";

async function handler(req, res) {
  console.log("req", req);
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://Antonina:pGWZI2pmE6oxYPoz@cluster0.lideuo9.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
    );

    const db = client.db();
    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ messaage: "Meetup inserted!" });
  }
}

export default handler;
