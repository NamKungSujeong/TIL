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
