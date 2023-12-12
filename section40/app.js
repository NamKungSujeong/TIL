const express = require("express");
const app = express();

app.use((req, res, next) => {
  req.requestTime = Date.now();
  console.log(req.method, req.path);
  next();
});

// 미들웨어 패스워드 설정 데모
app.use((req, res, next) => {
  const { password } = req.query;
  if (password === "ffffff") {
    next();
  }
  res.send("YOU NEED A PASSWORD");
});

app.get("/secret", (req, res) => {
  res.send("SECRET");
});

app.listen(3000, () => {
  console.log("port is listening");
});
