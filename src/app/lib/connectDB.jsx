import { MongoClient, ServerApiVersion } from "mongodb";

let db;

export const connectDB=async()=>{
  if(db) return db
  try {
    
    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.k4th77t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    
    console.log('Connecting to MongoDB with URI:', uri);
    
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    
    db = client.db('NextUserDB');
    return db
  } catch (error) {
    console.log(error);
  }
}
