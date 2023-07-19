let maximum = parseInt(prompt("최대 수 입력"));
while (!maximum) {
  maximum = parseInt(prompt("숫자 입력해 주세요"));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = prompt("추측값 입력");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
  if (guess === "q") {
    break;
  }
  guess = parseInt(guess);
  if (guess > targetNum) {
    guess = prompt("Down");
    attempts++;
  } else if (guess < targetNum) {
    guess = prompt("Up");
    attempts++;
  } else {
    guess = prompt("유효한 숫자를 입력해 주세요");
  }
}

console.log("correct");
