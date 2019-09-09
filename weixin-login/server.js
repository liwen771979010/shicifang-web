var http = require('http')
var https = require('https')
var url = require('url');
const appid = 'wx3bdb1192c22883f3';
const secret = 'db9d6b88821df403e5ff11742e799105';

http.createServer(function (request,response) {
    //获取地址栏的参数
    var params = url.parse( request.url, true).query
    if(params.operation==='token'){
        https.get(`https://api.weixin.qq.com/sns/oauth2/access_token?appid=${appid}&SECRET=${secret}&code=${params.code}&grant_type=authorization_code`,function (res) {
            res.on('data',function (chunk) { //chunk是请求返回的数据
                response.writeHead(200,{
                    'Content-Type':'application/json;charset=utf-8',
                    'Access-Control-Allow-Origin':'*'//支持跨域
                });
                response.end(chunk)
            });
        })
    }
    if(params.operation==='userinfo'){
        https.get(`https://api.weixin.qq.com/sns/userinfo?access_token=${params.access_token}&openid=${params.openid}`,function (res) {
            res.on('data',function (chunk) { //chunk是请求返回的数据
                response.writeHead(200,{
                    'Content-Type':'application/json;charset=utf-8',
                    'Access-Control-Allow-Origin':'*'//支持跨域
                });
                response.end(chunk)
            });
        })
    }
}).listen(8888)
console.log('this server is start, port is 8888');










