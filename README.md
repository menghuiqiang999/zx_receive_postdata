###receive_postdata 接受http req 中post data


安装

    npm install zx_receive_postdata

用例

    const receivePostData = require("zx_receive_postdata");
    router.post('/', function(req, res, next) {
        receivePostData(req,(err,result) => {
            if(err){return console.log(err)}
            console.log("result",result);
        });
    res.send("success");
    });
