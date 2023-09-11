const math = require("./math");
// require : 다른 파일 불러오기
console.log(math);

// const { PI, add } = require("./math");
// 구조분해 할당 형식으로도 불러올 수 있음

// {} 빈 객체가 나옴
// why?
// node 모듈이 작동하는 방식과 관계
// 파일을 만들고 불러 왔을 때 파일 콘텐츠를 자동으로 모든 곳에서 쓸 수 있는게 아님
// 따라서 파일을 불러 오더라고 파일 안에서 명시적으로 특정항목을 내보배라고 명령하지 않는 한 파일에서 아무것도 가지고 오지 않음
// 보통 불러온 파일에서 modelue.exports로 내보낸 값을 가지고 옴

const cats = require("./shelter"); // console.log(PI)

// console.log(square(9))
console.log("REQUIRED AN ENTIRE DIRECTORY!", cats);
