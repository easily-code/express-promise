const cookie = require('cookie');
const {Promise}=require('bluebird');
module.exports=function (req,res) {
  return new Promise(function (suc,fail) {
    var c=req.headers['cookie'];
    req.cookie=c?cookie.parse(c):{};
    suc();
  });
};
