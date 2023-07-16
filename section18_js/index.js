// 객체 리터럴
// 객체도 일종의 구조에 여러 데이터 조각을 저장하게 해줌

// 키(key), 값(value)로 이루어진 프로퍼티를 이용해 데이터 저장
const person = {
  name: "sujeong",
  age: 26,
  address: "Seoul",
};
// 객체의 값으로는 문자, 숫자, 배열 등 다 들어갈 수 있음

// 객제 값 접근

// 1.
person["name"];
// 모든 키는 문자열로 저장됨
// []안에 표현식 사용 가능

// 2.
person.name;
// 정확한 값을 찾을 수 있음

// 객체 수정하기
const midterms = {
  danielle: 96,
  thomas: 78,
};

midterms.thomas = 80;
// or
midterms.thomas = "B";
midterms["danielle"] = "A";

// 값 추가하기
midterms.ezra = "C+";
midterms.antonio = "D";

// 배열과 객체 네스트 구성하기
const student = [
  { name: "sj", age: 25, address: "seoul" },
  { name: "kisoo", age: 33, address: "sejong" },
];

const movie = {
  name: "범죄도시",
  date: "2023-07-15",
  isFun: {
    sj: true,
    kisoo: true,
  },
};
