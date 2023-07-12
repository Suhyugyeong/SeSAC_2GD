if (5 > 3) {
  console.log("얍!");
}
let number = Number(prompt("숫자를 입력하시오"));
// 프롬프트 들어오는 값을 아예 숫자로 받음
/* console.log(typeof number); */
if (number > 10) {
  console.log("10보다 큼");
} else {
  console.log("10이거나 10보다 작음");
}
// 꼭 number가 아니어도 됨


if (number > 10) {
  console.log("10보다 커요");
} else if (number === 10) {
  console.log("입력한 수가 10이네요");
} else {
  console.log("10보다 작네요~");
}


if (number <= 100 && number >= 90) {
  console.log("A");
} else if (number >= 80) {
  console.log("B");
  // 이미 90이상 조건은 걸러졌으니까 안 써도 됨
} else if (number >= 70) {
  console.log("C");
} else if (number >= 60) {
  console.log("D");
} else {
  console.log("F");
} 

//age가 무엇인지 설명하기 위해 변수선언해주는것
let age = 1;
if (age>=0 && age>=8) {
  console.log("유아");
} else if (age < 14>) {
  console.log("초등학생");
} else if (age < 17) {
  console.log("중학생");
} else if (age < 20) {
  console.log("고등학생");
} else if(age > 120){
  console.log("성인");
    console.log("성인")
} else if (age >=120){
    console.log("나이가 될 수 없음")
} else {
    console.log("음수값입니다.")
}


let userId = "user";
let userPw = "1234!";

function login() {
  let inputId = prompt("아이디를 입력해주세요!");
  let inputPw = prompt("패스워드를 입력해 주세요!!");

  if (userId === inputId) {
    if (userPw === inputPw) {
      alert("로그인 성공!!");
    } else {
      alert("비밀번호가 틀렸습니다!");
    }
  } else {
    alert("아이디가 틀렸어요!");
  }
}

// login();

let a = 4;
switch (a) {
  case 3:
    console.log("입력값이 4보다 작음");
    break;
  case 4:
    console.log("입력값이 4입니다.");
    break;
  case 5:
    console.log("a는 5예요.");
  break;
  default:
    console.log("입력값이 4가 아녜요");
    break;
}

let num = 5;
if(num % 2===0){
    console.log('짝수')
}else{
    console.log('홀수')
}
//num은 변수요
let result = num %2===1?"홀수":"짝수";


let now = new Date().getHours();
//위에는 아직 안 배운 내용
if (now >= 12) {
  console.log("오후");
} else {
  console.log("오전");
}
//else는 조건이 필요없으니 ()안에 내용 넣어줄 필요가 없음.
//시간은 애초에 0~23까지의 숫자를 반환하기 때문에 이하값을 줄 필요없음
now >= 12 ? console.log("오후") : console.log("오전");


/* 
for문
for(변수 초기화; 조건식(어디까지 증가? 감소?);증감 ){
    반복할 코드
}

 index++; index = index+1; index+=1;
*/
for (let i = 0; i < 10; i = i + 1) {
  console.log("안녕하세요 😊");
}
for (let i = 0; i < 10; i++) {
  console.log("안녕하세요 😊");
}
for (let i = 0; i < 10; i += 2) {
  console.log(`${i + 1}번째`);
}

// 1 ~ 5까지 출력하는 방법
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
for (let i = 1; i < 6; i++) {
  console.log(i);
}
for (let i = 0; i < 5; i++) {
  console.log(i + 1);
}

for (let i = 5; i > 0; i--) {
  console.log(i);
}

// 1 ~ n까지 더하는 프로그램 만들기
let n = 10; //55
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum = sum + i;
  //   sum += i;
}
console.log(sum);
// i=1 -> sum = 0 +1 ===> sum=1
// i=2 -> sum=1+2 ===> sum =3;
// i=3 -> sum =6
// ...
// i= n ->

// 배열과 for문 같이 써보기
let fruits = ["사과", "망고", "수박", "바나나"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
for (let i = 0; i < fruits.length; i++) {
  console.log(`I like ${fruits[i]}`);
}

//  배열에 들어가 있는 Number 형 데이터의 합 구하기
let numArr = [100, 200, 99, 58, 77, 23];
let numSum = 0;
for (let i = 0; i < numArr.length; i++) {
  numSum = numSum + numArr[i];
}

console.log(sum);

/* if문과 for문 같이 쓰기 */
/* 
if(){
    for(){}
}
for(){
    if(){}
}
 */
for (i = 0; i < 21; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

for (i = 0; i < 21; i = i + 2) {
  console.log(i);
}