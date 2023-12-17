const express = require("express");
const app = express();

app.use((req, res, next) => {
  req.requestTime = Date.now();
  console.log(req.method, req.path);
  next();
});

// 사용자 지정 에러 처리
// 주의할 점
// express에서 오류처리 함수를 만들 때 네 개의 인수를 전달해야 한다
// err, req, res, next

app.use((err, req, res, next) => {
  console.log("#################");
  console.log("########ERROR#######");
  console.log("#################");
  next(err);
  // 오류 처리 미들웨어를 불러낼 때는 반드시 next 안에 err를 전달해야 함
});
// next()를 쓰지 않으면 코드가 끝나 내장 오류 핸들러가 실행되지 않음

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
