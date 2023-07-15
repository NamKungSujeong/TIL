// 배열
// const 변수명 : [] 의 형태로 배열 선언
let colors = ["red", "orange", "yellow", "green"];

// 배열 접근
// 배열에 데이터를 넣으면 각 요소에 인덱스가 할당됨
colors[0]; // red
colors[3]; // green
colors[0][0]; // r
colors[2][1]; // e
// 값이 없는 경우 undefined 반환

colors[1] = blue; // orange => blue로 변경됨

// 배열 메서드
let days = ["Monday", "Tuesday", "Wednesday"];
// 1. push : 배열 맨끝에 값 추가
days.push("Thursday"); // ["Monday", "Tuesday", "Wednesday, 'Thursday']"

// 2. pop : 배열 맨 끝에 있는 값 제거
days.pop(); // ["Monday", "Tuesday", "Wednesday"];

// 3. shift : 배열 맨 앞에 있는 값 제거
days.shift(); // ["Tuesday", "Wednesday"];

// 4. unshift : 배열 맨 앞에 값 추가
days.unshift("Sunday"); // ["Sunday", "Tuesday", "Wednesday"]

// 5. concat : 두 개의 배열을 합쳐서 새 문자열을 만드는 메서드
// 6. indexOf : 인덱스 값을 알려주는 메서드
// 7. includes : 배열에 특정 값이 포함되어 있는지 알려주는 메서드, true, false로 반환
// 8. reverse : 배열의 순서를 뒤집어 주는 메서드
// 9. slice(?start, ?end) : 배열의 일부를 복사
let people = ["Sam", "Jhon", "Luna", "Justin"];
people.slice(2); // ["Luna", "Justin"]
people.slice(-2); // ["Luna", "Justin"] 음수 쓰면 뒤에서부터
people.slice(1, 3); // ["Jhon", "Luna"]

// 10. splice(start, ?deleteCount, ...items) : 기존 요소들을 제거하거나 대체하거나 추가해서 배열의 내용을 변경

// 11. sort : 배열 정렬 but 좋은 정렬 방식은 아니기 때문에
// 커스터마이징 해서 오름차순, 내림차순 정렬에 사용

// 참조 타입과 동일성 테스트
// [1 , 2] === [1, 2] 가 false가 나오는 이유?
// js는 배열의 컨텐츠가 아니라 메모리에서 참조되는 값을 비교하기 때문
// 따라서 같은 참조를 따르는 배열인지 확인하고 비교해야 됨
