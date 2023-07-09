console.log(document.getElementsByTagName("div"[5]));

console.log(document.getElementsByName("name"));
//이거는 아무 값이 안 나와야되는 거 아님? 아예 오류 아님??*************************************nodelist로 뜨는데..

console.log(document.querySelector("[name='id']"));
//여기서 name id인게 두 개있는데 쿼리셀렉터는 첫번째것만 선택해주는 거 알고 있음. 그럼 두번째거 선택하려면?? 인덱스[]넣어도 안 되던데??***************************

const divs = document.querySelectorAll("div");
console.log(divs);

const pinks = document.querySelectorAll(".pink");
console.log(pinks);
console.log(pinks[0]);
console.log(pinks[1]);
console.log(pinks[2]);
console.log(pinks[3]);

console.log("--------");
for (let i = 0; i < pinks.length; i++) {
  console.log(pinks[i]);
}

console.log("-----");
for (let pink of pinks) {
  console.log(pink);
}
