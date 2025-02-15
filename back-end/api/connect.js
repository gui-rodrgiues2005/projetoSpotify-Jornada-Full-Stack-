import { MongoClient } from 'mongodb';

const URI = "mongodb+srv://rodriguesguidev:u84anUJtUAXzQq5k@cluster0.mpwg5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("ProjetoSpotify");
// const songCollection = await db.collection('songs').find({}).toArray();
// console.log(songCollection)