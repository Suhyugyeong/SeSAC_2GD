for (i = 10; i < 21; i = i + 2) {
  console.log(i);
}

let numArr = [100, 200, 99, 58, 77, 23];
let numSum = 0;
for (let i = 0; i < numArr.length; i++) {
  numSum = numSum + numArr[i];
}
console.log(numSum); //557

let number = Number(prompt("숫자를 입력하세요"));
console.log(typeof number);
if (number > 10) {
  console.log("10보다 큼");
} else if (number <= 10) {
  console.log("10이거나 10보다 작음");
}

function helloworld1() {
  console.log("hello world1");
}
helloworld1();
//콘솔에 뜨게 하려면 그냥 function없이 console.log만 찍으면 되는거 아님?
//굳이 함수 설정하고 콘솔찍고 이 과정이 이해가 안 됨...
//console.log에 찍는다고 해서 이게 helloworld1의 함수 값으로 들어가는거임?

function helloworld2() {
  console.log("111");
  return "hello world2";
}
console.log(helloworld2());

let math = prompt("수학점수?");
let eng = prompt("영어점수?");
math = Number(math);
eng = Number(eng);
let avg = (math + eng) / 2;
console.log(avg);
//여기서 그냥 Number주고 value값 안 붙여도 되는 이유가 뭐임?
//value값은 input태그에만 들어감
