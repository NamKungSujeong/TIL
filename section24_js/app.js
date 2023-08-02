// DOM 개요

// 문서 객체 모델
// 웹 페이지를 구성하는 js 객체들의 집합

// 요소의 선택을 도와주는 메서드

// 1. getElementById
// id를 이용해 요소를 선택

document.getElementById("banner");

// 2. document.getElementsByTagName
// 해당 태그 네임 요소를 모두 선택

const allImage = document.getElementsByTagName("img");

for (let img of allImage) {
  console.log(img);
}

// 3. document.getElementsByClassName
// 해당 클래스 요소를 모두 반환

// 4. querySelector : id, 클래스, 태그 네임 모두 선택 가능
// 같은 여러 요소가 있을 경우 첫번째 값만 반환

document.querySelector("p");
document.querySelector(".square");
document.querySelector("#History");

document.querySelector("img:nth-of-type(2)");

// querySelectorAll : 일치하는 모든 요소를 반환

// 다음과 같이 속성 값 변경 가능
document.querySelector("img").id = "aaa";

const firstLink = document.querySelector("a");

// 속성 값 가지고 오기
firstLink.getAttribute("href");
// 속성 값 변경하기
firstLink.setAttribute("href", "http://www.google.com");

// 스타일 변경
const h1 = document.querySelector("h1");
h1.style.color = "red";

const allLinks = document.querySelectorAll("a");
for (let link of allLinks) {
  link.style.color = "rgb(0, 100, 134)";
  link.style.textDecorationColor = "magenta";
}
// inline 스타일만 읽을 수 있으며 값을 넣어줄 때도 인라인으로 들어가기 때문에 좋은 방법은 아님

// classList : 요소의 클래스를 제어하고 검색, 조작 등을 하기 위해 호출되는 객체

const h2 = document.querySelector("h2");

// 클래스 추가
h2.classList.add("purple");
// 클래스 제거
h2.classList.remove("purple");

h2.classList.toggle("purple");
// class가 있으면 제거를 , 없으면 추가를

// 계층 이동
const firstBold = document.querySelector("b");
firstBold.parentElement; //<p>...</p>

const paragraph = firstBold.parentElement;
paragraph.childElementCount; // 8
// 모든 요소에게 부모 요소는 하나지만 자식은 여러개 일 수 있음

firstBold.previousElementSibling; // 이전 형제 요소
firstBold.nextElementSibling; // 디음 형제 요소

// appendChild
// 1. 새 요소 만들기
const newImg = document.createElement("img");
newImg.src = "url";
// 2. appendChild를 통해 해당 요소의 맨 마지막 자식으로 추가
document.body.appendChild(newImg);
// body의 마지막 자식으로 newImg를 추가

// append
// 새로운 설정 필요 없이 바로 추가 가능
// 여러개 추가 가능
const p = document.querySelector("p");
p.append("new p", "new 2");

// prepend : 첫 번쨰 자식으로 추가

const newB = document.createElement("b"); // 생성
newB.append("hi"); // 속성, 텍스트 등 삽입
p.prepend(newB); // 요소 추가

// removeChild : 자식 요소 삭제
// 자식 요소를 바로 삭제할 수 없고 부모요소를 선택해서 삭제 가능
// 부모요소.removeChild()

// remove : 부모나 자식에 상관없이 요소 삭제
