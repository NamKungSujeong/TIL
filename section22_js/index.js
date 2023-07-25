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

// const movies = [
//   {
//     title: "Amadeus",
//     score: 99,
//   },
//   {
//     title: "Stand By Me",
//     score: 85,
//   },
//   {
//     title: "Parasite",
//     score: 95,
//   },
//   {
//     title: "Alien",
//     score: 90,
//   },
// ];
// movies.forEach(function (movie) {
//   console.log(`${movie.title} - ${movie.score} / 100`);
// });

// 2. map
// 콜백함수를 받아서 배열 요소당 한번씩 실행한다는 점에서 forEach와 비슷하지만
// 콜백의 반환값을 이용해서 새로운 배열을 만든다는 차이점이 있음

// numbers.map(function (num) {
//   return num * 2;
// });

// const titles = movies.map(function (movie) {
//   return movie.title;
// });

//['Amadeus', 'Stand By Me', 'Parasite', 'Alien'] 반환

// 화살표 함수
// const add = (x, y) => {
//   return x + y;
// };

// 화살표 함수를 사용하면 return 없이 암시적 반환을 할 수도 있음
const add = (x, y) => x + y;
// 한 줄 코드나 짧은 함수를 사용할 때만 가능

// const movieScore = movies.map((movie) => {
//   return `${movie.title} - ${movie.score}/100`;
// });

// setTimeout, setInterval
// 실행을 연기, 대기, 중단, 추후 날짜로 실행 연기 등에 사용

// setTimeout
// 전달한 함수를 설정한 밀리초 뒤에 실행

// setTimeout(() => {
//   console.log("hello");
// }, 3000);
// 3초 뒤에 실행시킴
// 콜백을 하지 않으면 바로 실행됨

//setInterval
// 전달한 함수를 설정한 밀리초마다 호출

// setInterval(() => {
//   console.log(Math.floor(Math.random() * 10) + 1);
// }, 2000);
// 2초마다 호출

// filter
// 요소로 구성된 배열에서 필터링을 하거나 부분 집합을 모아 새 배열을 만듦
// 원본에는 영향을 미치지 않음

numbers.filter((n) => {
  return n === 4;
});

const movies = [
  {
    title: "Amadeus",
    score: 99,
    year: 1984,
  },
  {
    title: "Sharknado",
    score: 35,
    year: 2013,
  },
  {
    title: "13 Going On 30",
    score: 70,
    year: 2004,
  },
  {
    title: "Stand By Me",
    score: 85,
    year: 1986,
  },
  {
    title: "Waterworld",
    score: 62,
    year: 1995,
  },
  {
    title: "Jingle All The Way",
    score: 71,
    year: 1996,
  },
  {
    title: "Parasite",
    score: 95,
    year: 2019,
  },
  {
    title: "Notting Hill",
    score: 77,
    year: 1999,
  },
  {
    title: "Alien",
    score: 90,
    year: 1979,
  },
];

const good = movies.filter((movie) => {
  return movie.score > 80;
});
const goodTitle = good.map((m) => m.title);

const bad = movies.filter((movie) => {
  return movie.score < 70;
});

const recent = movies.filter((movie) => {
  return movie.year > 2000;
});

// every, some
// 항상 불리언 값을 반환

// every 요소의 모든 값이 true를 반환해야 true
// 하나라도 false면 false
// array.every(() => {})의 형태

// some
// 요소 중 하나 이상이 true면 true

// reduce
// 배열을 점차 줄여가면서 마지막에는 결국 하나의 값만 남김

// [].reduce((acc: 총합계, 줄여 나가야 하는 대상  , cur : 각각의 요소) => {
//     return
// })

[3, 5, 7, 9, 11].reduce((acc, cur) => {
  return acc + cur;
});

// acc 3 + cur 5 => 8
// acc 8 + cur 7 => 15
// acc 15 + cur 9 => 24
// acc 24 + cur 11 => 35

const price = [9.99, 1.5, 19.99, 49.99, 30.5];

const total = price.reduce((acc, cur) => {
  return acc + cur;
});

const minPrice = price.reduce((acc, cur) => {
  if (cur < acc) {
    return cur;
  }
  return acc;
});

const highest = movies.reduce((best, cur) => {
  if (cur.score > best.score) {
    return cur;
  }
  return best;
});
