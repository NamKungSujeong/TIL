// 객체 프로토타입
// js 객체가 서로의 기능을 상속하는 방식의 매커니즘
// 템플릿 객체와도 같음
// 같은 프로토타입을 가지고 있는 여러 객체를 만들 수 있고 복사할 필요 없이 같은 매서드에 접근 가능

// 객체 프로토타입

String.prototype; // 모든 문자열에 대한 프로토타입 객체

String.prototype.yell = function () {
  console.log(this.toUpperCase());
};

// 객체지향 프로그래밍

// 특성이나 메서드 정의를 포함하는 클래스나 객체 템플릿을 생성

// 팩토리 함수
function hex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgb(r, g, b) {
  return `rgb(${r} ${g} ${b})`;
}

hex(255, 100, 25);
rgb(255, 100, 25);

// 값을 전달하면 팩토리가 객체를 만들어 주고
// 마지막에 반환하여 사용할 수 있게 해줌
function makeColor(r, g, b) {
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;
  color.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r} ${g} ${b})`;
  };
  return color;
}

const firxtColor = makeColor(35, 255, 150);
firxtColor.rgb();
