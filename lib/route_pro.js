var {Promise}=require('bluebird');
module.exports=function (req,res,arr) {
  return new Promise(function (suc,fai) {
    var ret=arr.find(function (item) {
      retrun item[1]!=req.method?false:
        (
          req.path==item[0]||
          !item[3]?false:item[3].test(req.path)
        );
    });
    ret?ret[2](req,res):fai();
  });
}
