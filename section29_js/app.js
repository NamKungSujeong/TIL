// // // 객체 프로토타입
// // // js 객체가 서로의 기능을 상속하는 방식의 매커니즘
// // // 템플릿 객체와도 같음
// // // 같은 프로토타입을 가지고 있는 여러 객체를 만들 수 있고 복사할 필요 없이 같은 매서드에 접근 가능

// // // 객체 프로토타입

// // String.prototype; // 모든 문자열에 대한 프로토타입 객체

// // String.prototype.yell = function () {
// //   console.log(this.toUpperCase());
// // };

// // // 객체지향 프로그래밍

// // // 특성이나 메서드 정의를 포함하는 클래스나 객체 템플릿을 생성

// // // 팩토리 함수
// // function hex(r, g, b) {
// //   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// // }

// // function rgb(r, g, b) {
// //   return `rgb(${r} ${g} ${b})`;
// // }

// // hex(255, 100, 25);
// // rgb(255, 100, 25);

// // // 값을 전달하면 팩토리가 객체를 만들어 주고
// // // 마지막에 반환하여 사용할 수 있게 해줌
// // function makeColor(r, g, b) {
// //   const color = {};
// //   color.r = r;
// //   color.g = g;
// //   color.b = b;
// //   color.rgb = function () {
// //     const { r, g, b } = this;
// //     return `rgb(${r} ${g} ${b})`;
// //   };
// //   return color;
// // }

// // const firxtColor = makeColor(35, 255, 150);
// // firxtColor.rgb();

// // // 생성자 함수
// // function Color(r, g, b) {
// //   this.r = r;
// //   this.g = g;
// //   this.b = b;
// // }

// // new Color(255, 10, 100);

// // js 클래스
// class Color {
//   constructor(r, g, b, name) {
//     // 새로운 색상이 만들어질때마다 즉시 실행되는 함수
//     // constructor에서는 일반적으로 this를 액세스
//     // this가 자동으로 새로운 객체를 참조
//     // 새로운 빈 객체 만들기 -> this의 값을 그 객체에 참조
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     this.name = name;
//   }
//   rgb() {
//     const { r, g, b } = this;
//     return `rgb(${r} ${g} ${b})`;
//     // new 키워드를 사용하면 this는 개별 객체를 참조
//   }
//   hex() {
//     const { r, g, b } = this;
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   }
//   calcHSL() {
//     let { r, g, b } = this;
//     // Make r, g, and b fractions of 1
//     r /= 255;
//     g /= 255;
//     b /= 255;

//     // Find greatest and smallest channel values
//     let cmin = Math.min(r, g, b),
//       cmax = Math.max(r, g, b),
//       delta = cmax - cmin,
//       h = 0,
//       s = 0,
//       l = 0;
//     if (delta == 0) h = 0;
//     else if (cmax == r)
//       // Red is max
//       h = ((g - b) / delta) % 6;
//     else if (cmax == g)
//       // Green is max
//       h = (b - r) / delta + 2;
//     // Blue is max
//     else h = (r - g) / delta + 4;

//     h = Math.round(h * 60);

//     // Make negative hues positive behind 360°
//     if (h < 0) h += 360;
//     // Calculate lightness
//     l = (cmax + cmin) / 2;

//     // Calculate saturation
//     s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

//     // Multiply l and s by 100
//     s = +(s * 100).toFixed(1);
//     l = +(l * 100).toFixed(1);
//     this.h = h;
//     this.s = s;
//     this.l = l;
//   }
// }

// const c1 = new Color(255, 67, 89, "tomato");

// // 확장 및 슈퍼 키워드

// class Pet {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   eat() {
//     return `${this.name} is eating`;
//   }
// }

// class Cat extends Pet {
//   constructor(name, age, livesLeft = 9) {
//     // this.name = name;
//     // this.age = age;
//     // 다른 데이터를 this에 추가하고 싶을 때
//     // 복제하고 싶지 않은 부분에 super 키워드 사용
//     // super는 확장시킨 즉 상속한 클래스를 참조
//     super(name, age);
//     this.livesLeft = livesLeft;
//   }
//   meow() {
//     return "MEOWWWW";
//   }
// }

// class Dog extends Pet {
//   bark() {
//     return "Bark!!";
//   }
// }

// 두 클래스는 살짝 다르지만 여전히 같은 부분이 많음
// js에서 가능한 옵션 중 하나가 바로 두 클래스가 모두 확장시킬 수 있는 따로 만든 별개의 클래스로 이동 가능

// extends :  클래스가 상속 받을 수 있는 키워드

// super
