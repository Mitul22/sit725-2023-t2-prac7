let client = require('../dbConnection');

let collection;

collection = client.db().collection('Album');

function postAlbum(album,callback) {
    collection.insertOne(album,callback);
}

function getAllAlbums(callback){
    collection.find({}).toArray(callback);
}

models.exports = {postAlbum,getAllAlbums}

