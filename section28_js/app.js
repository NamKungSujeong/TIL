// 1. ajax
// 비동기식 js와 xml
// 데이터를 꺼낼 수도 어디론가 보낼 수도 있음

// 2. APIs(Application Programming Interface)
// js로 ajax 요청을 할 때 HTML, CSS , JS가 아닌 순수한 정보를 원하는데
// 이때 필요한게 api
// 컴퓨터가 여러 소프트웨어와 상호 작용하거나 소통하는 모든 인터페이스를 의미하는 광범위한 용어

// webAPI : 웹, HTTP를 기반으로 하는 인터페이스

// 3. JSON (Java Sciprt Object Notation)
// js 객체 문법
// js와는 관련이 없고 계속헤서 데이터를 전송하거나 정보를 전송하는 포맷
// 사용자끼리 전송하거나 API에서 브라우저로 전송 가능

// js 객체 구문을 기반으로 하며 js와 매우 유사해 보임
// 차이점
// 1. 모든 키가 ""를 가지고 있음, js는 X
// 2. JSON에서는 undefined가 유효하지 않은 값임

// postman
// http 요청을 해서 여러 api를 테스트 하고 요청을 저장하는 도구
// api의 요청을 확인하기 위해 사용

// http 요청 동사
// 1. get : api로부터 정보를 가지고 올 때
// 2. post : 데이터를 보낼 때 사용
// 3. delete : 삭제

// http 상태 코드
// 1. 200 : 요청이 성공적으로 처리
// 2로 시작하는 코드는 대부분 성공적인 처리, 200이 가장 대표적

// 2. 400, 401, 404 ... : 사용자나 클라이언트 측에서 잘못되었을 때 뜨는 코드

// 3. 5로 시작하는 오류는 서버 오류에 해당

// 쿼리 스트링
// 쿼리 스트링을 통해 값을 제공
// 퀴라 스트링이 필요 없는 api의 경우 잘못된 값이 들어간다고 해도 에러를 띄우는게 아니라 알아서 무시함
// url?키=값&키=값

// http headers
// header : 요청과 함께 정보를 전달하는 부수적인 방식

// const data = `{"name": "Luke Skywalker", "height": "172", "mass": "77", "hair_color": "blond", "skin_color": "fair", "eye_color": "blue", "birth_year": "19BBY", "gender": "male", "homeworld": "https://swapi.dev/api/planets/1/"}`;

fetch("https://api.coinpaprika.com/v1/tickers?quotes=KRW")
  .then((response) => {
    return response.json();
  })
  .then((json) => console.log(json))
  .catch((err) => console.log(err));

// axios

// http 요청의 생성과 처리를 최대한 간소화할 목적으로 만들어짐
// js에서 기본으로 제공하는 게 아니라 따로 build해줘야함
// promise 반환

axios
  .get("https://api.coinpaprika.com/v1/tickers?quotes=KRW")
  .then((res) => console.log(res));
// json으로 파싱해줄 필요가 없음
