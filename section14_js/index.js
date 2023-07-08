// JS Number

// - js는 하나의 숫자 타입을 가지고 있음
// - js에는 기본적인 연산 기능이 들어있음
// - % : 나머지 기호, 나머지를 구할 때 사용
// - ** : 지수 연산자 , 제곱값을 구함
// - NaN : Not a Nunber, 하지만 엄밀히 말하자면 js에서는 숫자로 취급됨

// 변수
// 값에 어떤 이름을 지정하고 js로 그 값을 저장하여 나중에 다시 돌아오거나
// 다시 쓰거나 업데이트 하거나 불러올 수 있게 해줌

let year = 1958;

// 변수 업데이트 하기
let score = 0;

score = score + 5; // score = 10으로 업데이트 됨
score += 5; // 위의 식과 같은 뜻임

score = score - 5;
score -= 5;

// *= , /= 도 가능

// 1개씩 늘리고 빼고 싶을 때는 ++, -- 를 사용
// score++ / score--

// 증가 연산자 i++ 과 ++i의 차이?
// 1. i++ 후치 증가 또는 후위 증가 연산자
// : 먼저 변수의 현재 값을 반환한 다음 1을 증가시킴
// let i = 0;
// i++;  0이 출력
// i;  이때 1이 출력

// 2. ++i : 먼저 변수의 값을 1증가시킨 다음 증가한 값을 결과로 반환
// let i = 0
// ++1 1이 출력
// i 1이 출력

// let, const , var
// 1. const : 상수, 변수의 값이 변할 수 없음
// 변하지 않는 확실한 값을 변수로 선언할 때 사용
// const age = 26
// age = 28 이때 오류 발생

// 2. let : 변하는 값을 선언해 줄 때 사용

// 3. var : 예전에 사용하던 방식

// JS boolean
// true or false

const isLoggedIn = true;
const Winter = false;

// 변수 명명과 규칙
// 1. 식별자를 선언할 때 공백 x , 숫자로 시작하면 x
// 2. _로 시작은 가능
// 3. 보통 한단어 이상을 사용할 경우는 카멜 케이스로 선언
// 4. 의미 있게 선언해주기
