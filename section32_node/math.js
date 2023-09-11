const add = (x, y) => x + y;

const PI = 3.14159;

const square = (x) => x * x;

exports.square = square;
exports.PI = PI;

// =========================
// module.exports;
// 내보내는 특성

// 사용법 1

// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;

// 사용법 2

// const math = {
//     add: add,
//     PI: PI,
//     square: square,
//   };

// module.exports = math;

// 사용법 3

// module.exports.add = (x, y) => x + y;
// module.exports.PI = 3.14159;
// module.exports.square = (x) => x * x;
