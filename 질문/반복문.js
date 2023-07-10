for (i = 10; i < 21, i + 2; ) {
  console.log(i);
}
//계속 나오는데 구조가 어떻게 되는지? 설정을 어떻게 해야 멈출 수 있는지..? break?

for (let i = 0; i < 10; i++) {
  console.log("안녕하세요!");
}
//이건 안녕하세요 10번 찍히지

for (let i = 1; i <= 5; i++) {
  console.log(i);
}
//1,2,3,4,5

let numArr = [100, 200, 99, 58, 77, 23];
let numSum = 0;
for (let i = 0; i < numArr.length; i++) {
  numSum = numSum + numArr[i];
}
console.log(numSum); //557
//이게 배열이라 약간 이해가.....

let number = Number(prompt("숫자를 입력하세요"));
console.log(typeof number);
if (number > 10) {
  console.log("10보다 큼");
} else {
  console.log("10이거나 10보다 작음");
}
//여기서 숫자가 아닌 문자를 입력해도 답이 나오는데 엄격하게 숫자만 받을 수 있는 방법은?
