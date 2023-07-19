// 1. For 루프
// 루프의 핵심은 어떤 기능을 반복하는 것

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
//   // 1 ~ 10 까지 출력
// }

// 무한 루프
//: 멈추지 않는 루프로 조건이 거짓이 되지 않아 무한 루프에 빠지지 않도록 주의해야 함

// for (let i = 20; i >= 0; i++) {
//   console.log(i); // 조건이 거짓이 되지 않기 때문에 무한 루프가 실행됨
// }

// 배열 루프
// :  배열을 반복하면서 각 요소에 뭔가를 할 수 있음

// const animals = ["lions", "tigers", "bears"];

// for (let i = 0; i < animals.length; i++) {
//   console.log(animals[i]);
//   // 루프를 배열의 길이만큼 돌면서 각 인데스 값들을 출력하는 for문
// }

// //  거꾸로 출력할 때
// for (let i = animals.length - 1; i >= 0; i--) {
//   console.log(animals[i]);
// }

// // for문 중첩
// for (let i = 1; i <= 10; i++) {
//   console.log(`i is ${i}`);
//   for (let j = 1; j < 4; j++) {
//     console.log(`j is ${j}`);
//   }
// }
// i is 1
//    j is 1
//    j is 2
//    j is 3
// i is 2
//    j is 1
//    j is 2
//    j is 3...의 형태 출력

// const seatingChart = [
//   ["Kristen", "Erik", "Namita"],
//   ["Geoffrey", "Juanita", "Antinio", "Kevin"],
//   ["Yuma", "Sakura", "Jack", "Erika"],
// ];

// for (let i = 0; i < seatingChart.length; i++) {
//   const row = seatingChart[i];
//   console.log(`ROW #${i + 1}`);
//   for (let j = 0; j < row.length; j++) {
//     console.log(row[j]);
//   }
// }

// ROW #1
//  Kristen
//  Erik
//  Namita
// ROW #2
//  Geoffrey
//  Juanita
//  Antinio
//  Kevin
// ROW #3
//  Yuma
//  Sakura
//  Jack
//  Erika

// 2. while 루프 : 반복 횟수가 정해져 있지 않을 때 좋음
// let count = 0;
// while (count < 10) {
//   count++;
//   console.log(count); // 1 ~ 10 출력
// }

// break;
// while 문에서 많이 사용되며 조건이 맞을 때 반복문을 빠져나오게 하는 키워드

// let input = prompt("say");
// while (true) {
//   input = prompt(input);
//   if (input === "stop") {
//     break;
//   }
// }

// for (let i = 0; i <= 100; i++) {
//   console.log(i);
//   if (i === 50) {
//     break;
//   }
// }
