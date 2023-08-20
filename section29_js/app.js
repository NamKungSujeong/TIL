// 객체 프로토타입
// js 객체가 서로의 기능을 상속하는 방식의 매커니즘
// 템플릿 객체와도 같음
// 같은 프로토타입을 가지고 있는 여러 객체를 만들 수 있고 복사할 필요 없이 같은 매서드에 접근 가능

// 객체 프로토타입

String.prototype; // 모든 문자열에 대한 프로토타입 객체

String.prototype.yell = function () {
  console.log(this.toUpperCase());
};
