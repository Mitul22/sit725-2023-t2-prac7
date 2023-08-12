const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mitultandon:Mongodb00@cluster0.5a2rytc.mongodb.net/?retryWrites=true&w=majority";


const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

client.connect();

module.export = client;

