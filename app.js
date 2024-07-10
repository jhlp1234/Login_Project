const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const port = 3000;

//앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}`))
app.use(bodyParser.json());
//url을 통해 전달되는 데이터에 한글, 공백같은 문자가 포함될 경우 인식되지않는 문제 해결
app.use(bodyParser.urlencoded({extended: true}));

//라우팅
const home = require("./routes/home");
app.use("/", home); // 미들웨어 등록해주는 메소드

app.listen(port, function(){
  console.log(__dirname);
});

module.exports = app;