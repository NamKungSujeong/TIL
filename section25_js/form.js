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
