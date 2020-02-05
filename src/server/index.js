const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const sampleAPIResp = require('./sampleAPI.js');
const testServerData = require('./testServer.js');
// import {testServer} from './sampleAPI.js';

//Setup Aylient API
var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

//Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//CORS
const cors = require('cors');
app.use(cors());

//Setup Port
const port = 8091;
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});

app.use(express.static('./dist'));

//Callback functions
const getAylienAPI = async (req, res) => {
  console.log('Started getAylienAPI');
  console.log(req.body.URL);
  const getData = await textapi.entities(req.body.URL,
    function(error, response) {
    if (error === null) {
        // setTimeout(function() {res.send(response.entities);}, 3000)
        res.send(response.entities);
      console.log('Response sent');
    }else{
    console.log("error:",  error);
    console.log(textapi);
  }
  })

};

//Routes
app.get('/', (req, res) => {
	res.send('../../../dist/index.html');
});

app.post('/apiData', getAylienAPI);

app.get('/test', function (req, res) {
    console.log('Test Server');
    res.send(testServerData);
});
