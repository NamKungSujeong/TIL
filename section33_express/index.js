const express = require("express"); // express 불러오기
const app = express(); // express 실행
// console.dir(app);

app.use(() => {
  console.log("wow");
}); // 요청이 들어오면 언제든지 콜백을 실행

// 3000 : 요청을 받을 포트
app.listen(8080, () => {
  // 콜백함수를 넣어서 앱이 요청을 받기 시작하거나 요청을 받으면 실행될 함수 작성
  console.log("Listen port 8080");
});
// -> 실행하면 커서가 바뀜, 앱 실행이 끝아지 않고 들어오는 요청을 기다림
