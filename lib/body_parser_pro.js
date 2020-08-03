const bodyParser = require('body-parser');
const {Promise}=require('bluebird');
module.exports=function (req,res,op) {
  var mid=bodyParser.urlencoded(op);
  return new Promise(function (suc,fai) {
    mid(req,res,function (err) {
      err?fai(err):suc();
    });
  });
};
