import app from "./config/app";
var serverless = require('serverless-http');
module.exports.handler = serverless(app);