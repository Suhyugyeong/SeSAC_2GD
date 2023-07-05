const btn1 = document.querySelector(".btn--black");
const btn2 = document.querySelector(".btn--green");
const btn3 = document.querySelector(".btn--blue");
const btn4 = document.querySelector(".btn--red");

btn1.addEventListener("click", function () {
  alert("버튼1을 클릭했군요");
});

btn2.addEventListener("mouseover", function () {
  btn2.style.backgroundColor = "gray";
});

const container = document.getElementById("container");

console.log(contrainer);
btn2.addEventListener("click", () => {
  const div = document.createElement("div");
  div.innerText = "안녕";
  div.style.backgroundColor = "pink";
  container.append(div);
});


function changeColor("click", function (){
    const divs = document.querySelectorAll('#container div');
    for(let div of divs);}
div.style.backgroundColor = "skyblue";
div[divs.length - 1].style.backgroundColor = "red";
)
//divs가 배열임 div는 for문 쓰기 위해 만들어준...

btn3.addEventListener('click', changeColor)

function changeBtnColor(){
    this.style.backgroundColor = "yellow";
    this.style.backgroundColor = "red";
}
//이벤트 적용할때 btn4 적용하면 btn4만 적용되기 때문에 
//이럴때는 this를 이용해서 자기값에 반응할 수 있도록해야함

btn4.addEventListener("click", changeBtnColor);

console.log(window);
window.addEventListener('scroll')
