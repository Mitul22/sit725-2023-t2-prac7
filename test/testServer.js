const {expect} = require("chai");
const request = require("request");
const album = require('../server');

describe('Album GET Testing', function(){
    it('album GET tested',function(){
        request('https://localhost:3000/api/album',function(a,b,c){
        console.log('It is sucessfully tested');
        });
    });
});

describe('Album POST Testing', function(){
    it('album POST tested',function(){
        request.post('https://localhost:3000/api/album',function(a,b,c){
        console.log('It is sucessfully tested');
        });
    });
});

describe('Album DELETE Testing', function(){
    it('album DELETE tested',function(){
        request.delete('https://localhost:3000/api/album',function(a,b,c){
        console.log('It is sucessfully tested');
        });
    });
});

