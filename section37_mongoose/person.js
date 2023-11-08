const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/shopApp");
  console.log("CONNECTION OPEN!");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const personSchema = new mongoose.Schema({
  first: String,
  last: String,
});

personSchema.virtual("fillName").get(function () {
  return `${this.first} ${this.last}`;
});

// 여기서 'this' 는 사람 개인이자 우리가 작업하는 인스턴스를 참조하며
// 인스턴스 메서드를 추가하는 것과는 다름

const Person = mongoose.model("Person", personSchema);
// node에서 사용해보면 확인가능

// 이는  fullName이라는 특성처럼 보이지만 Mongo에서 온 게 아닙
// db.people.find() 여기 first와 last가 있지만 fullName은 없음
// 이는 가상 특성에 대한 getter를 정의하는 것으로 이 특성은 데이터베이스 내부에 존재하는 것이 아니고 JavaScript의 Mongoose에서만 가능
// 꽤 일반적으로 접근하는 정보를 가질 때 이들을 사용

// mongoose로 미들웨어 정의하기

// Mongoose는 특정 작업 실행 전후에 코드를 실행할 수 있게 해줌
// 특정 Mongoose 메서드 호출 전후에도 가능
// 따라서 어떤 것이 삭제되거나 저장되기 직전이나 updateMany나 find 등 어떤 함수를 호출할 때도 코드를 실행할 수 있음

personSchema.pre("save", async function () {
  this.first = "WOW";
  this.last = "HAHA";
  console.log("ABOUT SAVED");
});

personSchema.post("save", async function () {
  console.log("JUST SAVED");
});
