//server.js
‘use strict’
//first we import our dependencies…
var express = require(‘express’);
var mongoose = require(‘mongoose’);
var bodyParser = require(‘body-parser’);
var Company = require('./models/companies');
//and create our instances
var app = express();
var router = express.Router();
//set our port to either a predetermined port number if you have set
//it up, or 3001
var port = process.env.API_PORT || 3001;
//mongodb dbconfig
mongoose.connect('mongodb:admin_mig:made@gambia123@ds161890.mlab.com:61890/madeingambia');
//now we should configure the API to use bodyParser and look for
//JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//To prevent errors from Cross Origin Resource Sharing, we will set
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
 res.setHeader(‘Access-Control-Allow-Origin’, ‘*’);
 res.setHeader(‘Access-Control-Allow-Credentials’, ‘true’);
 res.setHeader(‘Access-Control-Allow-Methods’, ‘GET,HEAD,OPTIONS,POST,PUT,DELETE’);
 res.setHeader(‘Access-Control-Allow-Headers’, ‘Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers’);
//and remove cacheing so we get the most recent comments
 res.setHeader(‘Cache-Control’, ‘no-cache’);
 next();
});
//now we can set the route path & initialize the API
router.get(‘/’, function(req, res) {
 res.json({ message: ‘API Initialized!’});
});
//adding the /companies route to our /api router
router.route(‘/companies’)
 //retrieve all companies from the database
   .get(function(req, res) {
     //looks at our Company Schema
     Company.find(function(err, companies) {
     if (err)
     res.send(err);
     //responds with a json object of our database.
     res.json(companies)
     });
   })
   //post new company to the database
   .post(function(req, res) {
       var company = new Company();
       //body parser lets us use the req.body
       company.name = req.body.name;
       company.url = req.body.url;
       company.email_address = req.body.email_address;
       company.contact = req.body.contact;
       company.address = req.body.address;
       company.date_of_establishment = req.body.date_of_establishment;
       company.logo = req.body.logo;
       company.ranking = req.body.ranking;
       company.save(function(err) {
       if (err)
       res.send(err);
       res.json({ message: ‘Company successfully added for review!’ });
   });
 });
//Use our router configuration when we call /api
app.use(‘/api’, router);
//starts the server and listens for requests
app.listen(port, function() {
 console.log(`api running on port ${port}`);
});
