/**
 * Created by Administrator on 2019/1/21.
 */


function receivePostData (req,callback){
    var body = "";
    req.on('data', function (chunk) {
        body += chunk;
    });
    req.on('end',  () => {
        callback(null,body)
    });
    req.on('error',(err) => {
        return callback(err)
    } );
}
module.exports = receivePostData;