//model/companies.js
"use strict";
//import dependency
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//create new instance of the mongoose.schema. the schema takes an
//object that shows the shape of your database entries.
var CompaniesSchema = new Schema({
 name: String,
 url: String,
 email_address: String,
 contact: String,
 address: String,
 date_of_establishment: Date,
 logo: String,
 ranking: Number
});
//export our module to use in server.js
module.exports = mongoose.model("Company", CompaniesSchema);
