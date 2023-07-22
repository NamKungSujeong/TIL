// // 1. 함수 범위
// function collectEggs() {
//   let total = 6;
//   //   console.log(total); // 6출력
// }

// collectEggs();
// console.log(total);
// // 정의되지 않았다고 뜸, 함수 안에서 선언된 변수는 함수 안에서만 사용할 수 있게 범위가 한정됨

// 1) 블록 범위 : 함수를 제외하고 기본적으로 중괄호로 감싸져 있는 부분

let radius = 8;
if (radius > 0) {
  const PI = 3.14159;
  let msg = "HIII";
}

// console.log(PI);
// console.log(msg); // 둘 다 모두 출력되지 않음

// const , let은 변수의 범위를 블록으로 제한함
// var를 이용해 변수를 선언하면 블록 범위로 제한되지 않음

// 2) 렉시컬 범위
// 중첩된 함수나 내부 함수는 상위 몇 레벨 위에 있든 상관 없이
// 부모 함수는 조부모 함수 등이 액세스 하는 동일한 항목에 엑세스 할 수 있음
// 역방향으로는 안됨

// function bankRobbery() {
//   const heroes = ["Spiderman", "Wolverine", "Black Panther"];
//   function cryForHelp() {
//     for (let hero of heroes) {
//       console.log(`Please help us, ${hero}`);
//     }
//   }
//   cryForHelp();
// }

// 2. 함수 표현식
// 변수에 함수를 저장

const add = function (x, y) {
  return x + y;
};

// 다음과 같이 함수를 정의하면 함수를 인수로 전달하거나 반환값으로 사용할 수도 있음

// 3. 고차함수
// 다른 함수와 함께 작동하거나 다른 함수에서 작동하는 함수
// function callTwice(func) {
//   func();
//   func();
// }

// function roll() {
//   const roll = Math.floor(Math.random() * 6) + 1;
//   console.log(roll);
// }

// callTwice(roll);

// callTwice(roll());
// 이렇게 작성할 경우 roll()함수를 인수로 전달하는 것이 아닌
// 샐행값을 인수로 전달하는 것이기 때문에 오류가 뜸

// 4. 반환 함수
// 함수내에서 함수를 값으로 반환

// function makeFunc() {
//   const rand = Math.random();
//   if (rand > 0.5) {
//     return function () {
//       console.log("Wow");
//     };
//   } else {
//     return function () {
//       console.log("haha");
//     };
//   }
// }

// 5. 매서드 정의하기
// 메서드는 객체에 종속된 특성으로 함수에 포함되는 개념
// 이름 앞에 .을 붙여서 사용
// 모든 메서드는 함수지만 모든 함수가 메서드는 아님

// const myMath = {
//   PI: 3.14,
//   square: function (num) {
//     return num * num;
//   },
//   cube: function (num) {
//     return num ** 3;
//   },
// };

// myMath.square(4);

// this
// 메서드에 있는 객체를 가리킬 때 사용하는 키워드

const cat = {
  name: "blue",
  color: "grey",
  breed: "scottish fold",
  meow() {
    console.log(`${this.name} says meow`);
    // 여기에서 this는 cat 객체를 가리킴
    // but this의 값이 바뀔 수 있기 때문에 항상 그런 것은 아님
  },
};

// 6. try/catch
// 오류와 예외 처리
// 특히 오류를 잡아내서 코드 실행이 중단되지 않도록 함

try {
  hello.toUpperCase();
} catch {
  console.log("error");
}
