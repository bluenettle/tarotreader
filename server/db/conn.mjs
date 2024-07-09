import { MongoClient } from "mongodb";
const connectionString = ;
const client = new MongoClient(connectionString);

//Need to first set up the database to finish with names and connections

let conn;
try {
    conn = await client.connect();
} catch(e) {
    console.error(e);
}

let db = conn.db();

export default db;
