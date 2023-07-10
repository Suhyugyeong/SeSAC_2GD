const btn1 = document.querySelector(".btn--black");
const btn2 = document.querySelector(".btn--green");
const btn3 = document.querySelector(".btn--blue");
const btn4 = document.querySelector(".btn--red");

/* btn1 */
btn1.addEventListener("click", function () {
  alert("버튼 1을 클릭하셨군요!");
});

btn1.addEventListener("mouseover", function () {
  btn1.style.backgroundColor = "gray";
});

/* btn2 */
const container2 = document.getElementById("container");
// 이게 왜 버튼 2에서 만들었는지??**********************************************************
//버튼2를 누르면 버튼4 아래에 생성되는거니까?
//이거 없어도 크게 상관이 없는 것 같은데??

btn2.addEventListener("click", () => {
  const div = document.createElement("div");
  div.innerText = "안녕";
  div.style.backgroundColor = "pink";
  container2.append(div);
  console.log(container2);
});

/* btn3 */
function changeColor() {
  const divs = document.querySelectorAll("#container div");
  //아이디가 container인 div의 자식요소로 생성되는거임???************************************
  for (let div of divs) {
    div.style.backgroundColor = "skyblue";
  }

  divs[divs.length - 1].style.backgroundColor = "red";
  //여기서 왜 divs.length에서 -1을 해야되는지 ??*********************************************
}

let arr = [1, 2, 3, 4, 5];
// arr.length  5;
console.log(arr[4]);

let arr2 = ["a", "b", "c", "d", "e", "f", "g", "h"];
// arr2.length :8
console.log(arr2[7]);
btn3.addEventListener("click", changeColor);

/* btn4 */
function changeBtnColor() {
  this.style.backgroundColor = "yellow";
  this.style.color = "#000";
}
btn4.addEventListener("click", changeBtnColor);

/* click 외의 많은 동작들 */

window.addEventListener("scroll", () => {
  if (scrollY > 500) {
    document.querySelector(".pos").style.opacity = "1";
  }
});
