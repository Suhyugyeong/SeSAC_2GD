//1번째
const gugudan = function () {
  for (let i = 1; i <= 9; i++) {
    console.log(`3*${i}=${3 * 1}`);
  }
};
gugudan();

// const gugudan = function naming() {
//   for (let i = 1; i <= 9; i++) {
//     console.log(`3*${i}=${3 * 1}`);
//   }
// };
// naming();

// 2번째:코드에서 max변수의 출력값이 배열 중 가장 큰 숫자가 될 수 있도록
// getArrayNumber()함수를 완성하세요 이때 배열 요소는 반드시 숫자형이라고 가정

function getArrayNumber(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (result < arr[i]) result = arr[i];
  }
  return result;
}
const max = getArrayNumber([10, 50, 30]);
console.log(max);
