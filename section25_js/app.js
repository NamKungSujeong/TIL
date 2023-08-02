// DOM 이벤트
// 사용자들이 하는 행동(클릭, 드래그 드롭, 호버 등)에 반응하는 역할을 함

const btn = document.querySelector("#v2");

// onclick : 클릭
btn.onclick = function () {
  console.log("clicked me");
};

// onmouseenter : 마우스를 올렸을 때
function scream() {
  console.log("AAAAAHAHHHH");
  console.log("you touching me");
}

btn.onmouseenter = scream;

// addEventListener(이벤트, 콜백 함수)
// 1. 여러개의 콜백함수를 호출할 수 있음
// 2. 옵션을 넣을 수 있음
// ex) addEventListener(이벤트, 콜백 함수, {once: true}) ->
// 처음 딱 한번만 실행되고 이벤트 리스너가 제거됨

const btn3 = document.querySelector("#v3");
btn3.addEventListener("click", function () {
  alert("clicked");
});
