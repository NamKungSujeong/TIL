//

//① Callback Function

//1. 다른 함수의 인자로써 이용되는 함수.
//2. 어떤 이벤트에 의해 호출되어지는 함수.

// const delayedColorChange = (newColor, delay, doNext) => {
//   setTimeout(() => {
//     document.body.style.backgroundColor = newColor;
//     doNext && doNext();
//   }, delay);
// };

// delayedColorChange("red", 1000, () => {
//   delayedColorChange("orange", 1000, () => {
//     delayedColorChange("yellow", 1000, () => {
//       delayedColorChange("green", 1000, () => {
//         delayedColorChange("blue", 1000, () => {
//           delayedColorChange("indigo", 1000, () => {
//             delayedColorChange("violet", 1000, () => {});
//           });
//         });
//       });
//     });
//   });
// });

//② Promise

// Promise는 자바스크립트에서 제공하는 비동기를 간편하게 처리할 수 있도록 도와주는 객체이다.

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
    reject("error");
  }, 1000);
});

promise.then((res) => console.log(res)).catch((err) => console.log(err));

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

delayedColorChange("red", 1000)
  .then(() => delayedColorChange("orange", 1000))
  .then(() => delayedColorChange("yellow", 1000))
  .then(() => delayedColorChange("green", 1000))
  .then(() => delayedColorChange("blue", 1000))
  .then(() => delayedColorChange("indigo", 1000))
  .then(() => delayedColorChange("violet", 1000));

// const fakeRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     const rand = Math.random();
//     setTimeout(() => {
//       if (rand < 0.7) {
//         resolve("YOUR FAKE DATA HERE");
//       }
//       reject("Request Error!");
//     }, 1000);
//   });
// };

// fakeRequest("/dogs/1")
//   .then((data) => {
//     console.log("DONE WITH REQUEST!");
//     console.log("data is:", data);
//   })
//   .catch((err) => {
//     console.log("OH NO!", err);
//   });

// async/await
