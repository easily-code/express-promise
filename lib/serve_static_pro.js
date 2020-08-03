const serveStatic = require('serve-static');
const {Promise} = require('bluebird');
module.exports=function (req,res,path) {
  var mid=serveStatic(path);
  return new Promise(function (suc,fai) {
    mid(req,res,function (err) {
      err?fai(err):suc();
    });
  });
};
