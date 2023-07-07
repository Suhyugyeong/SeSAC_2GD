for (let i = 0; i < 10; i = i + 1) {
  console.log("안녕!");
}
//console에서 안녕!이 10번 반복됨

for (let i = 0; i < 10; i += 2) {
  console.log(`${i + 1}번째`);
}

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

for (let i = 1; i < 6; i++) {
  console.log(i);
}

for (let i = 5; i > 0; i--) {
  console.log(i);
}

let fruits = ["사과", "망고", "수박", "바나나"];
console.log(fruits[0]);
//console로그 4번 작성하는 대신 for문을 사용
for (let i = 0; i < fruits.length; i++) {
  console.log(`i like ${fruits[i]}`);
}
//0하고 등호 안 쓰는 걸 선호한다.

for (i = 0; i < 21; i++) {
  if (i % 2 === 0) console.log(i);
}

for(i = 10; i < 21, i + 2) {
    console.log(i)
}
