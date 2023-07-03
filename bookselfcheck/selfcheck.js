//389페이지 숫자 1부터 999까지 짝수가 몇 개인지 출력하는 코드를 작성하세요.

for (let i = 1; i <= 999; i++) {
  if (i % 2 === 0) console.log(i);
}
//짝수를 뽑아냄

let count = 0;
for (let i = 1; i <= 999; i++) {
  if (i % 2 === 0) count++;
}
console.log(count);
//499개 짝수의 개수
//++개수를 세라

let sum2 = 0;
for (let i = 1; i <= 999; i++) {
  if (i % 2 === 0) sum2 = sum2 + i;
}
console.log(sum2);
//249500 짝수의 총합

let sum3 = 0;
for (let i = 1; i <= 100; i++) {
  sum3 = sum3 + i;
}
console.log(sum3);
//5050 1부터 100까지 총합

let date = "2023.07.03";
console.log(date.replaceAll(".", `-`));
//백틱, 큰따옴표, 작은따옴표 상관없음?

//위 아래 사용 해도 같음
let arr3 = [6, 7, 8, 9, 10];
let alpha = ["a", "b", "c", "d", "e", "f"];
for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
}
//6~10까지 밑에도 of를 이용해서 a~f까지 잘 뜨고 있음.
for (let alph of alpha) {
  console.log(alph);
}

arr2 = ["quakka", "puppy", "rabbit", "hamster"];
arr2.filter(function (el) {
  return el.length >= 6;
});
console.log(arr2);

// let six = arr2.filter(function (el) {
//   return el.length >= 6;
// });
// console.log(six);

//20<= num <=22 정수 20<= num < 23
//0~3
console.log(Math.floor(Mate.random() * 3));
console.log(Math.floor(Mate.random() * 3) + 20);

// 난수 생성 -> random number
// 0<= num <1
console.log(Math.random());

// 0<= <10
console.log(Math.floor(Math.random() * 10));
// 0.xxx ~ 9.xxx

// 0<= x <=10 정수
// 0<= x< 11
// 0.xxx ~ 10.xxx
console.log(Math.floor(Math.random() * 11));

// 20<= x<=22 정수 20<= x <23
// 0 ~ 3
// 0<=x<1
// 0<=x<3
console.log(Math.floor(Math.random() * 3));
console.log(Math.floor(Math.random() * 3) + 20);
