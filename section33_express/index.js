const express = require("express"); // express 불러오기
const app = express(); // express 실행
const path = require("path"); // path 불러오기
const redditData = require("./data.json");
const { v4: uuid } = require("uuid");

// console.dir(app);

// app.use((req, res) => {
//   console.log("wow");
//   // console.dir(req);
//   // res.send("Response");
//   // res.send는 http 응답을 보내고 생성해야 함
//   res.send({ color: "red" });
// }); // 요청이 들어오면 언제든지 콜백을 실행

// res.send로 응답을 보낼 때마다 하나의 요청으로 끝나고 하나 이상의 응답을 얻는 http 요청을 받을 수 없음
// 모든 요청에 응답

// 라우팅
// get
// app.get("/", (req, res) => {
//   res.send("home");
// });

// // app.get("/cats", (req, res) => {
// //   res.send("Meow!!");
// // });

// // app.get("/dogs", (req, res) => {
// //   res.send("woof!");
// // });

// // // post
// // app.post("/cats", (req, res) => {
// //   res.send("post");
// // });

// // express 경로 매개변수
// // 매번 정확한 경로를 받을 수 없기 때문에 라우트를 생성해서 경로 문자열에 콜론을 이용해 변수나 경로 변수로 지정하게끔 하는 거
// app.get("/r/:rabbit", (req, res) => {
//   // console.log(req.params);
//   const { rabbit } = req.params;
//   res.send(`${rabbit} is here`);
// });

// // 쿼리 문자열 작업
// app.get("/search", (req, res) => {
//   // console.log(req.query);
//   const { q } = req.query;
//   if (!q) {
//     res.send("Nothing found!!");
//   }
//   res.send(`you search ${q}`);
// });

// // 라우팅 경로가 잘못 되었을 경우
// // 제네릭 응답을 만들어 라우팅 요청과 일치 하지 않을 때 응답
// // 이 코드를 가장 위에 작성하면 아래 코드가 모두 무시되기 때문에 맨 아래에 적는 것이 중요

// app.get("*", (req, res) => {
//   res.send("error");
// });

// // 3000 : 요청을 받을 포트
// app.listen(8080, () => {
//   // 콜백함수를 넣어서 앱이 요청을 받기 시작하거나 요청을 받으면 실행될 함수 작성
//   console.log("Listen port 8080");
// });
// // -> 실행하면 커서가 바뀜, 앱 실행이 끝아지 않고 들어오는 요청을 기다림

// section 34 ejs용 서버 express 만들기

// 설정하려는 키와 해당 값 또는 특성와 해당 값 두개의 인수 설정
app.set("view engine", "ejs");
// set 설정을 했기 때문에 따로 불러올 필요는 없고 express에서 ejs를 불러옴
app.set("views", path.join(__dirname, "/views"));

app.use(express.static("public"));

let comments = [
  {
    id: uuid(),
    username: "Todd",
    comment: "lol that is so funny!",
  },
  {
    id: uuid(),
    username: "Skyler",
    comment: "I like to go birdwatching with my dog",
  },
  {
    id: uuid(),
    username: "Sk8erBoi",
    comment: "Plz delete your account, Todd",
  },
  {
    id: uuid(),
    username: "onlysayswoof",
    comment: "woof woof woof",
  },
];

app.get("/", (req, res) => {
  res.render("home");
  // render : 파일을 보낼 수 있음
});

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

app.post("/comments", (req, res) => {
  const { comment, username } = req.body;
  comments.push({ comment, username, id: uuid() });
  res.redirect("/comments");
  // 서버가 재시작되어서 예전 댓글은 지워지고 변경이 생겨서 재시작하는 로직
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/show", { comment });
});
// update

app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const newComments = req.body.comment;
  const foundComment = comments.find((c) => c.id === id);
  foundComment.comment = newComments;
  res.redirect("/commetns");
});
// put vs patch
// put은 전체 내용을 업데이트
// patch는 부분적으로 수정 가능

app.get("/random", (req, res) => {
  // 데이터 넘겨주기
  const num = Math.floor(Math.random() * 10 + 1);
  res.render("random", { num });
  // 키 - 값 형태로 데이터 넘겨주기
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  if (data) {
    res.render("subreddit", { ...data });
  } else {
    res.render("notfound", { subreddit });
  }
});

app.get("/cats", (req, res) => {
  const cats = ["Blue", "Rocket", "Monty", "Stephanie", "Winston"];
  res.render("cats", { cats });
});

app.listen(8080, () => {
  console.log("Listen port 8080");
});
