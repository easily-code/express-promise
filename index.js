const http = require('http');
const reqParser = require('req-parser');
var routePro=require('./lib/rout_pro');//route
var cookiePro=require('./lib/cookie_pro');//cookie
var servePro=require('./lib/serve_static_pro');//serveStatic
var bodyPro=require('./lib/body_parser_pro');//bodyParser

var app=function (req,res) {
  reqParser(req);
  cookiePro(req,res)
  .then ( function(){
    return servePro(req,res,'./public');
  })
  .then ( function(){
    return bodyPro(req,res,{'extend':true});
  })
  .then (function () {
    return routePro(req,res,routers);
  })
  .catch(function () {
    res.end(err);
  })
};
http.createServer(app).listen(80);
