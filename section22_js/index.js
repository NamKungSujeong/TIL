// 배열 메서드

// 1. forEach
// 함수를 인수로 받음
// 배열안의 아이템 각각에 대해 함수와 코드를 실행시킴

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function print(e) {
//   console.log(e);
// }

// numbers.forEach(print);
// forEach에 이미 정의된 함수를 인수로 넣는 것이 흔한 방식은 아님

// numbers.forEach(function (el) {
//   console.log(el);
// });

// 이런 방식을 주로 사용

const movies = [
  {
    title: "Amadeus",
    score: 99,
  },
  {
    title: "Stand By Me",
    score: 85,
  },
  {
    title: "Parasite",
    score: 95,
  },
  {
    title: "Alien",
    score: 90,
  },
];
movies.forEach(function (movie) {
  console.log(`${movie.title} - ${movie.score} / 100`);
});
