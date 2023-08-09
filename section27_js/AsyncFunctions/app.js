// async function hello() {
// }

const sing = async () => {
  throw "OH NO, PROBLEM!";
  return "LA LA LA LA";
};

sing()
  .then((data) => {
    console.log("PROMISE RESOLVED WITH:", data);
  })
  .catch((err) => {
    console.log("OH NO, PROMISE REJECTED!");
    console.log(err);
  });

const login = async (username, password) => {
  if (!username || !password) throw "Missing Credentials";
  if (password === "corgifeetarecute") return "WELCOME!";
  throw "Invalid Password";
};

login("todd", "corgifeetarecute")
  .then((msg) => {
    console.log("LOGGED IN!");
    console.log(msg);
  })
  .catch((err) => {
    console.log("ERROR!");
    console.log(err);
  });

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('indigo', 1000))
//     .then(() => delayedColorChange('violet', 1000))

async function rainbow() {
  await delayedColorChange("red", 1000);
  await delayedColorChange("orange", 1000);
  await delayedColorChange("yellow", 1000);
  await delayedColorChange("green", 1000);
  await delayedColorChange("blue", 1000);
  await delayedColorChange("indigo", 1000);
  await delayedColorChange("violet", 1000);
  return "ALL DONE!";
}

// rainbow().then(() => console.log("END OF RAINBOW!"))

async function printRainbow() {
  await rainbow();
  console.log("END OF RAINBOW!");
}

printRainbow();

// 3. async/ await
// Promise를 기반으로 사용되는데 비동기 코드를 좀 더 동기적인 코드처럼 작성할 수 있게끔 한다.

// async/ await은 Promise를 대체하는 것이 아니라는 것을 유념해야 한다.
// Promise를 사용하지만 then, catch 메소드를 사용하여 컨트롤 하는 것이 아닌 동기적 코드처럼 반환 값을 변수에 할당하여 작성할 수 있게끔 도와주는 문법이다.

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 2000) {
        reject("Connection Timeout :(");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

async function makeTwoRequests() {
  try {
    let data1 = await fakeRequest("/page1");
    console.log(data1);
    let data2 = await fakeRequest("/page2");
    console.log(data2);
  } catch (e) {
    console.log("CAUGHT AN ERROR!");
    console.log("error is:", e);
  }
}
