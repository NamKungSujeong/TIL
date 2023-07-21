// 함수

// function funcName() {
//   // do something
// }

function sing() {
  console.log("DO");
  console.log("RE");
  console.log("MI");
} // 함수 정의

sing(); // 함수 실행

// 인수 : 함수에 입력하는 값
// 매개변수와 인수는 식별 능력 없이 전달 받은 값은 저장만 함

function greet(firstName, lastName) {
  console.log(`hi ${firstName}, ${lastName}`);
}

greet("NamKung", "Sujeong");

function repeat(str, num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += str;
  }
  console.log(result);
}

repeat("*", 7);

// return
// 출력값을 저장하고 보관할 수 있게 해주는 반환 키워드
// 함수의 실행을 중단시킴
// 언제나 하나만 반환함
function add(x, y) {
  // console.log(x + y); // console.log()는 저장이 가능한 값이 아님
  return x + y;
  console.log("hi"); // 출력 안됨
}
