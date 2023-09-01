
let express = require('express');
let app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mitultandon:Mongodb00@cluster0.5a2rytc.mongodb.net/?retryWrites=true&w=majority";
let port = process.env.port || 3000;
let collection;


const { Socket } = require('socket.io');
let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


async function runDBConnection() {
    try {
        await client.connect();
        collection = client.db().collection('Album');
        console.log(collection);
    } catch(ex) {
        console.error(ex);
    }
}

app.get('/', function (req,res) {
    res.render('index.html');
});

app.get('/api/albums', (req,res) => {
    getAllAlbums((err,result)=>{
        if (!err) {
            res.json({statusCode:200, data:result, message:'get all albums successful'});
        }
    });
});

app.post('/api/album', (req,res)=>{
    let album = req.body;
    postAlbum(album, (err, result) => {
        if (!err) {
            res.json({statusCode:201, data:result, message:'success'});
        }
    });
});

function postAlbum(album,callback) {
    collection.insertOne(album,callback);
}

function getAllAlbums(callback){
    collection.find({}).toArray(callback);
}

io.on('connection',(socket)=>{
    console.log('something');
    socket.on('disconnect',()=>{
        console.log('user disconnected');

    });

    setInterval(()=>{
        socket.emit('number',parseInt(Math.random()*10));
    },1000);
})

http.listen(port, ()=>{
    console.log('express server started');
    runDBConnection();
});


