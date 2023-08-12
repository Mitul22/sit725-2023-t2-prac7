let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');

router.post('/', (req,res)=>{
    controller.postAlbum(req,res);
});

router.get('/', (req,res) => {
    controller.getAllAlbums(req,res);
});

module.exports = router;
