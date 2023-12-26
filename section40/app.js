const express = require("express");
const app = express();

const AppError = require("./AppError");

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
  // console.log("#################");
  // console.log("########ERROR#######");
  // console.log("#################");
  // next(err);
  const { status = 500, message = "Something went wrong" } = err;
  res.status(status).send(message);
  // 오류 처리 미들웨어를 불러낼 때는 반드시 next 안에 err를 전달해야 함
  // 그렇지 않으면 다음 미들웨어를 실행시키려고 함
});
// next()를 쓰지 않으면 코드가 끝나 내장 오류 핸들러가 실행되지 않음

// 미들웨어 패스워드 설정 데모
const verify = (req, res, next) => {
  const { password } = req.query;
  if (password === "fff") {
    next();
  }

  // res.send("YOU NEED A PASSWORD");
  // res.status(401);
  throw new AppError("YOU NEED A PASSWORD", 401);
};
// 특정 경로를 보호하기 위해 특정 route에 콜백함수로 넘겨주기
app.get("/secret", verify, (req, res) => {
  res.send("SECRET");
});

// Express는 라우트나 미들웨어에서 발견된 모든 오류를 처리하여
//기본적으로 상태 코드 500으로 응답
app.get("/error", (req, res) => {});

// 비동기 에러 처리
// 라우트 핸들러와 미들웨어에 의해 발동된 비동기 함수에서 반환된 오류의 경우에는
// 다음 함수로 전달하여 Express가 잡아내서 처리할 수 있게 해야 함

//ex)
// app.get("/product/:id", async (req, res, next) => {
//   const { id } = req.params;
//   const product = await Product.findById(id);
//   if (!product) {
//     return next(new AppError("Product Not Found", 404));
//   }
//   res.send("product/show", { product });
// });

// 비동기 에러처리 2
// try ... catch 시용
// 비동기 함수일 때만 해당이 되고 다른 경우엔 이전에 봤던 것처럼 Express가 처리
// 예를 들어 new를 render할 땐 try...catch 문으로 감쌀 필요가 없음 뭔가 잘못되더라도 Express가 감지할 수 있기 때문
//

// app.post("/products", async (req, res, next) => {
//   try {
//     const product = new Product(req.body);
//     await product.save();
//     res.redirect(`/products/${product._id}`);
//   } catch (e) {
//     next(e);
//   }
// });

// 비동기 유틸리티 정의하기
// Express에서 쓰는 거의 모든 게 비동기 함수라서 다 try ... catch 문을 쓰는게 번거로움

// ex )
// 비동기 콜백을 감싸는 함수를 만들어서
// 다음 오류가 나올 때마다 반복해서 try...catch 문을 쓰지 않아도 되게 하기

// function warpAsync(fn) {
//   return function (req, res, next) {
//     fn(req, res, next).catch((e) => next(e));
//   };
// }

// app.get(
//   "/product/:id",
//   warpAsync(async (req, res, next) => {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     if (!product) {
//       return next(new AppError("Product Not Found", 404));
//     }
//     res.send("product/show", { product });
//   })
// );

app.use((err, res, req, next) => {
  const { status = 500, message = "Something went wrong" } = err;
  res.status(status).send(message);
});

app.listen(3000, () => {
  console.log("port is listening");
});

// 프로덕션 환경에서 오류 핸들러의 body 응답 디폴트는 HTML 상태 코드 메시지이고 다른 환경에선 err.stack
// JavaScript나 Express에서 오류를 발생시키면 모든 오류는 자동으로 스택이 생김
//
