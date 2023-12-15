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
  // res.send("YOU NEED A PASSWORD");
  throw new Error("YOU NEED A PASSWORD");
};

// 특정 경로를 보호하기 위해 특정 route에 콜백함수로 넘겨주기
app.get("/secret", verify, (req, res) => {
  res.send("SECRET");
});

// Express는 라우트나 미들웨어에서 발견된 모든 오류를 처리하여
//기본적으로 상태 코드 500으로 응답
app.get("/error", (req, res) => {});

app.listen(3000, () => {
  console.log("port is listening");
});
