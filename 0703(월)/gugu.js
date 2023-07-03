for (let gugu = 2; gugu <= 9; gugu++) {
  console.log(`${gugu}단`);
  for (let dan = 1; dan <= 9; dan++) {
    console.log(`${gugu}*${dan} = ${gugu * dan}`);
  }
}
// 템플릿 리터럴, 벡틱, 괄호 모양 오타 자주 남.

let n1 = 1;
while (n1 <= 5) {
  console.log(n1);
  n1++;
}
//증감식을 써주지 않으면 n1은 1인채로 있기 때문에 조건 충족으로 인해 무한대로 계속 돎.
//꼭 n1++로 제한을 줘야함.

let n2 = 10;
while (n2 > 5) {
  console.log(n2);
  n2--;
}

let n3 = 1;
while (n3 <= 10) {
  if (n3 % 2 === 0) {
    console.log(n3);
  }
  n3++;
}
//중괄호 빼먹지 말기!!
let n4 = 1;
while (true) {
  console.log(n4);
  n4++;
  if (n4 === 11) {
    break;
  }
}
//1부터 10까지 출력

/* let n5 = 0;
while (confirm("계속 진행?")) {
  n5++;
  alert(n5 + "번째 alert");
} */

/* let n5 = 0;
while (confirm("계속 진행?")) {
  n5++;
  alert(n5 + "번째 alert");
}
 */
//왜 안 돼?????????????

/* let sum5 = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  sum5 = sum5 + i;
}
console.log(sum5); */
//25

//여기부터 연습
/* let numberw =0;
let numberww =0;
while (let i = 1; i <= 100; i++){
    if(i%2===0) {
        numberw = numberw + i
    }if else(i%5===0){
        numberww = numberww + i 

    }
    console.log(`${numberw}+${numberww}`)
}



let numb = 0;
let num2 = 0;
let i = 0;
while(i<=100) {
    if(i%2===0) 
        numb = numb + i;
        i++;
    }else(i%5===0) {
        numb2 = numb2 + i;
        i++;
    }
console.log(`${numb} + ${numb2}`)



let i = 0;
while(i<=100 && i%2===0 && i%5===0){

i++;} */

//
let sum10 = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0 || i % 5 === 0) {
    sum10 = sum10 + i;
  }
}
//확인을 한 번 만하기 위해서는 for문을 벗어나서 해야함
console.log(sum10);
//답: 3050

let sum11 = 0;
let n11 = 0;
while (n11 < 101) {
  if (n11 % 2 === 0 || n11 % 5 === 0) {
    sum11 = sum11 + n11;
  }
  n11++;
}
console.log(sum11);
//답:3050
