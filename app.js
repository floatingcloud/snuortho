var fs = require('fs');
var http = require('http');
var express = require('express');

// 서버를 생성합니다.
var app = express();


// 미들웨어를 설정합니다.
app.use(express.cookieParser());
//app.use(express.bodyParser());
app.use(app.router);
app.use(express.logger());
app.use(express.static(__dirname+'/public'));

// 라우터를 설정합니다.
app.get('/', function (request, response) {
    fs.readFile('dataproc.html', function (error, data) {
        response.send(data.toString());
    });
});

app.post('/result',function (request, response) {
       
   console.log(request.param('saddleAngle'));
   console.log(request.param('bjorkSum'));
               
               
               //  fs.readFile('result.html', function (error, data) {
 //       response.send(data.toString());
  //  });
});



// 서버를 실행합니다.
http.createServer(app).listen(3000, function () {
    console.log('Server running at http://127.0.0.1:3000');
});
