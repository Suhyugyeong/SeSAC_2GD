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
