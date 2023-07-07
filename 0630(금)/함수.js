function helloworld1() {
  console.log("hello world1");
}
helloworld1();
// 이 두 가지 단계를 건너면 console에 hello world가 제대로 뜸

function helloworld2() {
  return "hello world2";
}
console.log(helloworld2());
// return은 function과 다르게 console.log 찍을 수 있음.
// return아래 console.log 적어도 적용안되고 어떤 문장도 적용 안 됨.

function add(num1, num2) {
  console.log("실행가능한");
  console.log(num1 + num2);
}
add(5, 10);
// num1과 num2에 값을 줄 때 컴마로 구분

// 여기부터 적용이 안 됨 이유가???????????????????????
const helloworld3 = function () {
  console.log("helloworld3");
};
helloworld3();

const helloWorld4 = () => {
  return "hello World 4!!";
};
console.log(helloWorld4());
