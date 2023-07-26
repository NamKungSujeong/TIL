// default 매개 변수
const rollDie = (num = 6) => {
  return Math.floor(Math.random() * num + 1);
};
// 매개변수가 없는 경우 default 값이 6이 들어감
// 여러개가 있을 때는 default 값이 있는 매개변수를 맨 앞에 넣으면 안됨

// 스프레드 구문

// 1. 함수 호출시의 스프레드 구문
const nums = [13, 4, 5, 21, 4, 3, , 6, 23, 664, 6, 234143];

Math.max(nums); // NaN 출력
// 숫자 하나하나가 아닌 전체가 있는 배열이 통과되기 때문

Math.max(...nums);
// 다음과 같이 전개 구문을 사용하면 인수 하나 하나로 펼쳐짐

console.log(nums); // [13, 4, 5, 21, 4, 3, , 6, 23, 664, 6, 234143]
console.log(...nums); // 13 4 5 21 4 3  6 23 664 6 234143

// 2. 행렬 리터럴 스프레드 구문
const cats = ["Blue", "Scout", "Rocket"];
const dogs = ["Rusty", "Wyatt"];

const allPets = [...cats, ...dogs];
// allPets = ["Blue", "Scout", "Rocket", "Rusty", "Wyatt"]

// 3. 객체 스프레드 구문
const feline = { legs: 4, family: "Felidae" };
const canine = { isFurry: true, family: "Caninae" };

const spread = { ...feline, color: "black" };
// spread = { legs: 4, family: "Felidae", color: "black" }

const catDog = { ...feline, ...canine };
// {legs: 4, family: "Caninae",isFurry: true }
// 같은 객체 특성이 있을 경우 뒤에 오는 특성이 덮기 때문에 뒤어 오는 특성이 들어감

// {...[2, 3, 4]}
// {0: 2, 1: 3, 2: 4}
// 배열을 객체로 만들경우 index 값이 키가 됨

// rest 매개변수
// 화살표 함수에서는 사용 불가능

function sum(...nums) {
  return nums.reduce((total, el) => total + el);
}
// 나머지를 모두 모아 배열로 만들어줌

function raceResults(gold, silver, ...everyoneElse) {
  console.log(`GOLD MEDAL GOES TO: ${gold}`);
  console.log(`SILVER MEDAL GOES TO: ${silver}`);
  console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`);
}
raceResults('Tina, "Jhon', "Sujeong", "Bob", "Sue");
// gold = Tina, silver = Jhon, 나머지 매개변수는 모두 everyoneElse로 들어감

// 구조 분해
// 배열이나 객체를 해체해서 별개의 변수 형태로 만들 수 있음

// 1. 배열 구조 분해
const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];

// const highScore = scores[0];
// const secondHighScore = scores[1];

const [gold, silver, bronze, ...everyoneElse] = scores;
// gold : 929321, silver : 899341 , bronze :888336 , 나머지는 everyoneElse에 할당

// 2. 객체 구조 분해
// 배열보다 많이 쓰임

const user = {
  email: "harvey@gmail.com",
  password: "sCoTt1948sMiTh",
  firstName: "Harvey",
  lastName: "Milk",
  born: 1930,
  died: 1978,
  bio: "Harvey Bernard Milk was an American politician and the first openly gay elected official in the history of California, where he was elected to the San Francisco Board of Supervisors",
  city: "San Francisco",
  state: "California",
};

// 보통 사용하는 방법
// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;

// 갹체 구조 분해 할당 방법
// const { email, firstName, lastName, city, bio } = user;

// why? 데이터가 짧으면 상관 없지만 길어지고 복잡해질수록 a.b.c.d 등 타고타고 들어가야 되는 불편함

const user2 = {
  email: "Stacy@gmail.com",
  firstName: "Stacy",
  lastName: "Gonzalez",
  born: 1987,
  city: "Tulsa",
  state: "Oklahoma",
};

const { born: birthYear, died: deathYear } = user;
const { city, state, died = "N/A" } = user2;

// 다음과 같이 새로운 이름을 정해주거나 default 값을 줄 수 있음
// 이미 값이 있는 경우에는 새로운 값을 줄 수 없음

// 3. 함수 매개 변수 구조 분헤

function fullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

fullName(user); // "Harvey Milk"

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

// movies.filter((movies) => movies.score >= 90);
// movies.filter(({ score }) => score >= 90);

// movies.map((movie) => {
//   return `${movie.title} ${movie.score}/100 ${movie.year}`;
// });

movies.map(({ title, score, year }) => {
  return `${title} ${score}/100 ${year}`;
});
