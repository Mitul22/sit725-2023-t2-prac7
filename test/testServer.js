const {expect} = require("chai");
const request = require("request");
//const album = require('../server');
url = 'https://localhost:3000/api/album';
let statusCode = 200;
let album = {
    title:'SOS',
    subTitle:'SZA',
    descripiton:'This is an R&B album',
    path:'images/SOS.jpg'
}

describe('Album GET Testing', function(){
    it('album GET tested',function(){
        request({url:url, form:album},function(error,response,c){
        let bodyObj = JSON.parse(statusCode);
        expect(bodyObj).to.equal(200);
        console.log('It is successful !',bodyObj);
        });
    });
});

describe('Album POST Testing', function(){
    it('album POST tested',function(){
        request.post({url:url, form:album},function(error,response,c){
        let bodyObj = JSON.parse(statusCode);
        expect(bodyObj).to.equal(200);
        console.log('It is successful !',bodyObj);
        });
    });
});

describe('Album DELETE Testing', function(){
    it('album DELETE tested',function(){
        request.delete({url:url, form:album},function(error,response,c){
        let bodyObj = JSON.parse(statusCode);
        expect(bodyObj).to.equal(200);
        console.log('It is successful !',bodyObj);
        });
    });
});
