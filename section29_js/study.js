const car = {
  wheels: 4,
  drive() {
    console.log("drive");
  },
};

const bmw = {
  color: "red",
  navigation: 1,
};

const benz = {
  color: "black",
};

const audi = {
  color: "white",
};

bmw.__proto__ = car;
// car가 bmw의 포로토 타입이 된다.
// 다르게 말하면 bmw가 car의 상속을 받는다.
benz.__proto__ = car;
audi.__proto__ = car;

const bmw2 = {
  color: "blue",
  name: "bmw4",
};

bmw2.__proto__ = bmw;

// 생성자 함수

// let userInfo1 = {
//   name: "홍길동",
//   age: 20,
//   addresss: "서울",
// };

// let userInfo2 = {
//   name: "홍길동",
//   age: 20,
//   addresss: "서울",
// };

// let userInfo3 = {
//   name: "홍길동",
//   age: 20,
//   addresss: "서울",
// };

// let userInfo1 = {
//   name: "홍길동",
//   age: 20,
//   addresss: "서울",
// };

// let userInfo2 = userInfo1;
// let userInfo3 = userInfo1;

// userInfo3.name = "마이콜";

// console.log(userInfo1.name);
// console.log(userInfo2.name);
// console.log(userInfo3.name);

// function UserInfo() {
//   this.name = "홍길동";
//   this.age = 20;
//   this.addresss = "서울";
// }

// let userInfo1 = new UserInfo();
// let userInfo2 = new UserInfo();
// let userInfo3 = new UserInfo();

// userInfo3.name = "마이콜";

// console.log(userInfo1.name);
// console.log(userInfo2.name);
// console.log(userInfo3.name);

const Bmw = function (color) {
  this.color = color;
};

Bmw.prototype.wheels = 4;
Bmw.prototype.drive = function () {
  console.log("drive");
};

const x5 = new Bmw("red");
const x4 = new Bmw("white");

// x5.__proto__ = car;
// x4.__proto__ = car;
// x4.__proto__ = car;
// x4.__proto__ = car;
// x4.__proto__ = car;
