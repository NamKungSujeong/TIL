const express = require("express"); // express 불러오기
const app = express(); // express 실행
// console.dir(app);

// app.use((req, res) => {
//   console.log("wow");
//   // console.dir(req);
//   // res.send("Response");
//   // res.send는 http 응답을 보내고 생성해야 함
//   res.send({ color: "red" });
// }); // 요청이 들어오면 언제든지 콜백을 실행

// 라우팅
// get
app.get("/", (req, res) => {
  res.send("home");
});

// app.get("/cats", (req, res) => {
//   res.send("Meow!!");
// });

// app.get("/dogs", (req, res) => {
//   res.send("woof!");
// });

// // post
// app.post("/cats", (req, res) => {
//   res.send("post");
// });

// express 경로 매개변수
// 매번 정확한 경로를 받을 수 없기 때문에 라우트를 생성해서 경로 문자열에 콜론을 이용해 변수나 경로 변수로 지정하게끔 하는 거
app.get("/r/:rabbit", (req, res) => {
  // console.log(req.params);
  const { rabbit } = req.params;
  res.send(`${rabbit} is here`);
});

// 쿼리 문자열 작업
app.get("/search", (req, res) => {
  // console.log(req.query);
  const { q } = req.query;
  if (!q) {
    res.send("Nothing found!!");
  }
  res.send(`you search ${q}`);
});

// 라우팅 경로가 잘못 되었을 경우
// 제네릭 응답을 만들어 라우팅 요청과 일치 하지 않을 때 응답
// 이 코드를 가장 위에 작성하면 아래 코드가 모두 무시되기 때문에 맨 아래에 적는 것이 중요

app.get("*", (req, res) => {
  res.send("error");
});

// 3000 : 요청을 받을 포트
app.listen(8080, () => {
  // 콜백함수를 넣어서 앱이 요청을 받기 시작하거나 요청을 받으면 실행될 함수 작성
  console.log("Listen port 8080");
});
// -> 실행하면 커서가 바뀜, 앱 실행이 끝아지 않고 들어오는 요청을 기다림
