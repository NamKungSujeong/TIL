const express = require("express");
const app = express();


app.use((req, res, next) => {
  req.requestTime = Date.now();
  console.log(req.method, req.path);
  next();
});

// 미들웨어 패스워드 설정 데모
const verify = (req, res, next) => {
  const { password } = req.query;
  if (password === "fff") {
    next();
  }
  res.send("YOU NEED A PASSWORD");
};

// 특정 경로를 보호하기 위해 특정 route에 콜백함수로 넘겨주기
app.get("/secret", verify, (req, res) => {
  res.send("SECRET");
});

app.listen(3000, () => {
  console.log("port is listening");
});
