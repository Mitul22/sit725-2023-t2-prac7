let collection = require('../models/album');

const postAlbum  = (req,res) => {
    let album = req.body;
    collection.postAlbum(album, (err, result) => {
        if (!err) {
            res.json({statusCode:201, data:result, message:'success'});
        }
    });
}

const getAllAlbums = (req,res) => {
    collection.getAllAlbums((err,result)=>{
        if (!err) {
             res.json({statusCode:200, data:result, message:'get all albums successful'});
        }
    });
}

module.exports = {postAlbum,getAllAlbums}

