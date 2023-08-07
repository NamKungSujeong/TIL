// form
const form = document.querySelector("#form");
const input = document.querySelector("#name");
const ul = document.querySelector("#catsList");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // 특정 이벤트의 기본동작이 수행되지 않도록 막아줌
  // 폼에 값을 입력해 데이터를 넘길 때 페이지가 새로고침 되지 않게
  const li = document.createElement("li");
  ul.appendChild(li);
  li.innerText = input.value;
  input.value = " ";
});

// 이벤트 위임
// 부모 요소에 이벤트 수신기를 추가하는 것
// 이벤트 수신기가 추가된 시점에 페이지에 없던 요소를 다루어야 하는 상황에서 편함
ul.addEventListener("click", (e) => {
  e.target.remove();
});
