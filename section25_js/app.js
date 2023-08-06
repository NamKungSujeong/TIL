// DOM 이벤트
// 사용자들이 하는 행동(클릭, 드래그 드롭, 호버 등)에 반응하는 역할을 함

// const btn = document.querySelector("#v2");

// onclick : 클릭
// btn.onclick = function () {
//   console.log("clicked me");
// };

// onmouseenter : 마우스를 올렸을 때
// function scream() {
//   console.log("AAAAAHAHHHH");
//   console.log("you touching me");
// }

// btn.onmouseenter = scream;

// addEventListener(이벤트, 콜백 함수)
// 1. 여러개의 콜백함수를 호출할 수 있음
// 2. 옵션을 넣을 수 있음
// ex) addEventListener(이벤트, 콜백 함수, {once: true}) ->
// 처음 딱 한번만 실행되고 이벤트 리스너가 제거됨

// const btn3 = document.querySelector("#v3");
// btn3.addEventListener("click", function () {
//   alert("clicked");
// });

// 키보드 이벤트

document.querySelector("button").addEventListener("click", (e) => {
  alert("click");
});

// document.querySelector("input").addEventListener("keydown", () => {
//   console.log("keydown");
// });
// document.querySelector("input").addEventListener("keyup", () => {
//   console.log("keyup");
// });

document.querySelector("input").addEventListener("keydown", (e) => {
  console.log(e.key); // 입력된 내용을 보여줌
  console.log(e.code); // 클릭한 키를 알려줌
});

window.addEventListener("keydown", (e) => {
  console.log(e.code);
});
// 입력창 안에서만이 아니라 페이지 어디에서든 keydown, keyup을 수신하고 싶을 때
