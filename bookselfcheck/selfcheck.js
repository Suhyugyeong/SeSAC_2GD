//389페이지 숫자 1부터 999까지 짝수가 몇 개인지 출력하는 코드를 작성하세요.

for (let i = 1; i <= 999; i++) {
  if (i % 2 === 0) console.log(i);
}

let count = 0;
for (let i = 1; i <= 999; i++) {
  if (i % 2 === 0) count++;
}
console.log(count);
//499개
