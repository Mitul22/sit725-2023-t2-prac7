let express = require('express');
let app = express();
let port = process.env.port || 3000;
let router = require('./routers/router');

require('./dbConnection');


app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/album',router);

app.listen(port, ()=>{
    console.log('express server started');
    runDBConnection();
});