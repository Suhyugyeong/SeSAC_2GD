//객체 = string, number, array, date, math, object, ...

let now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth()); //0부터 시작하기 때문에 +1해줘야됨.
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds(), "ms");
console.log(now.getDay(), "요일"); //0부터 일요일임

//내가 한 swith 방법
let n1 = new Date();
console.log(n1.getDay());
switch (n1.getDay()) {
  case 0:
    console.log("주말");
    break;
  case 1:
    console.log("평일");
    break;
  case 2:
    console.log("평일");
    break;
  case 3:
    console.log("평일");
    break;
  case 4:
    console.log("평일");
    break;
  case 5:
    console.log("평일");
    break;
  case 6:
    console.log("주말");
    break;
}

//리더님이 한 switch 방법
const day1 = new Date().getDay();
switch (day1) {
  case 0:
  case 6:
    console.log("주말");
    break;
  default:
    console.log("평일");
    break;
}

//리더님이 가르쳐주신 방법 console.log를 밖에 찍고 싶으면 day값을 줘야함
let n2 = new Date();
let day;
//여기다 =을 붙이면 안 됨.
if (n2.getDay() === 0 || n2.getDay() === 6) {
  day = "주말";
} else {
  day = "평일";
}
console.log(day);

//내가 한 방법인데 console.log안 찍어줘서 안 읽힘
let n3 = new Date();
if (n3.getDay() === 0 || n3.getDay() === 6) {
  console.log("주말입니다");
} else {
  console.log("평일입니다");
}

//삼항연산자
console.log(day === 0 || day === 6 ? "주말" : "평일");

let past = new Date(2020, 1, 13, 10, 10, 10);
console.log(past);

//math 객체 수학과 관련됨.
console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT2);

console.log(Math.min(100, -1, 30, 20, 5));
console.log(Math.ceil(5.1)); //올림 (정수로 변경)
console.log(Math.floor(5.1)); //내림
console.log(Math.round(5.1)); //반올림

//난수는 랜덤 숫자
//0<= num <1
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
//랜덤하게 번호를 줄때 사용

const areaNum = {
  Seoul: "02",
  Incheon: "032",
  Daejeon: "042",
  Busan: "051",
  Ulsan: "052",
  Daegu: "053",
  Gwangju: "062",
  Jeju: "064",
};

console.log(Object.keys(areaNum));
console.log(Object.values(areaNum));
