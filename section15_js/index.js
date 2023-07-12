// 문자열
// 1. ""로 감싸줘야함

// 2. 문자 문자열 안의 모든 문자는 관련된 숫자에 상응
// 문자열의 시작 = 0
// let name = "sujeong"
// name[0] = 's'
// name[4] = 'o'
// 두 문자열을 더할 수도 있음

// 3. 문자열 매서드
// 매서드 : 특정 문자열을 사용해 수행할 수 있는 동작
// toLowerCase() : 모든 문자를 소문자로
// toUpperCase() : 모든 문자를 대문자로
// trim() : 문자열의 처음과 끝에 오는 공백을 전부 없앰
// 매서드는 연달아 사용할 수 있음 ex) toUpperCase().trim()

// 4. 인수
// : 메서드로 전달되어서 메서드의 동작을 변경하는 입력 값
let say = "hello";
say.indexOf("o"); // 4 반환, 찾는 값이 없을 경우 -1 반환

// slice(start, (end)) : start 인덱스에서 end 인덱스 전까지 문자열을 자르는 메서드
// start는 포함, end는 미포함
say.slice(2); // "llo" 반환
say.slice(1, 3); // "el" 반환
say.slice(-1); // "o" 반환, 음수를 쓰면 마지막부터 반환

// replace(a, b) : a 자리를 b로 교체해주는 메서드
// a와 처음으로 매칭되는 값만 교체
say.replace("l", "w"); // hewlo 반환

// repeat() : 반복
"*".repeat(4); // "****" 반환

// 5. 템플릿 리터럴
// 백틱(``)사용

// 6. undefined, null
// undefined : 아무것도 정의된 값이 없는 상태
// null : 일부러 값을 지정하지 않는 것, 아무것도 없는 상태

// 7. Math , 난수
// Math : 수학과 관련된 특성과 메서드의 모음
// round() : 반올림
// abs() : 절대값
// pow() : 제곱
// floor() : 내림
// ceil() : 올림
Math.floor(23.9); // 23 반환
Math.ceil(34.1); // 35 반환

// Math.random() : 0 과 1사이의 수를 무작위로 반환, 1은 제외
Math.floor(Math.random() * 5) + 1; // 0에서 5사이의 자연수를 반환
// 다음과 같이 사용하면 0에서부터 곱하는 수까지의 자연수를 랜덤으로 생성할 수 있음
Math.floor(Math.random() * 3) + 20;
// 20 ~ 22사이의 수를 반환
