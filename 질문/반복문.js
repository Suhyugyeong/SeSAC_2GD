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

function helloworld1() {
  console.log("hello world1");
}
helloworld1();
//콘솔에 뜨게 하려면 console.log만 찍으면 되는거 아님? 위에서부터의 과정이 좀 이해가 안 감. console.log 말고 helloworld1에 "hello world1" 값을 줄 수 있는
//다른 방법이 있지 않음???? console.log에 찍는다고 해서 이게 helloworld1의 함수 값으로 들어가는거임?

function helloworld2() {
  return "hello world2";
}
console.log(helloworld2());
//return은 function과 다르게 console.log를 찍을 수 있음. return아래 console.log 적어도 적용 안 됨.
//이게 무슨 말이야?*********************************************************

let math = prompt("수학점수?");
let eng = prompt("영어점수?");
math = Number(math);
eng = Number(eng);
let avg = (math + eng) / 2;
console.log(avg);
//여기서 그냥 Number주고 value값 안 붙여도 되는 이유가 뭐임?
