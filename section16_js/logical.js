// 논리 연산자
// 다른 두 표현식을 합쳐 여러 논리를 하나로 결합함으로써 하나의 큰 논리를 형성 가능

// 1. && (AND)
// a && b 의 형태로 사용, 이 문장은 참이 되려면 a , b 참이어야 함
true && true; // true
true && false; // false
false && true; // false

// 2. || (OR)
// a || b : 이 문장은 참이 되려면 a , b 둘 중 하나만 참이면 됨
true || false; // true
false || true; // true
false || false; // false

// 3. ! (NOT) : 값을 반대로 바꿈
!true; // false
!false; // true

// switch
// switch ("something") {
//   case 1:
//     console.log("hello");
//   case 2:
//     console.log("hello2");
// }

// 스위치는 기본적으로 ()의 값과 일치하는 조건을 찾는 일을 함
// 조건이 맞는 case를 찾으면 거기서부터 중단 지점(break)까지 계속 실행함
// 따라서 break;를 사용해줘야함

// switch ("something") {
//   case 1:
//     console.log("hello");
//     break;
//   case 2:
//     console.log("hello2");
//     break;
//   default:
//      console.log("아무것도 일치하는 값이 없으면 실해되는 디폴트")
// }
