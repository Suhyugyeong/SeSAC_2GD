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
const container = document.getElementById("container");

btn2.addEventListener("click", () => {
  const div = document.createElement("div");
  div.innerText = "안녕";
  div.style.backgroundColor = "pink";
  container.append(div);
});

/* btn3 */
function changeColor() {
  const divs = document.querySelectorAll("#container div");
  for (let div of divs) {
    div.style.backgroundColor = "skyblue";
  }
  //   맨 마지막 요소만 빨강색으로 변경!
  divs[divs.length - 1].style.backgroundColor = "red";
}

btn3.addEventListener("click", changeColor);

/* btn4 */
function changeBtnColor() {
  this.style.backgroundColor = "yellow";
  this.style.color = "#000";
}
//this는 자기 자신을 선택
btn4.addEventListener("click", changeBtnColor);

/* click 외의 많은 동작들 */
console.log(window);
window.addEventListener("scroll", () => {
  console.log(scrollY);
  if (scrollY > 900) {
    document.querySelector(".pos").style.opacity = "1";
  }
});
//scrol 900일 때 뿅하고 나타남

//0707.01 이벤트객체확인*
const btn = document.querySelector("button");
const input = document.querySelector("input");
btn.addEventListener("click", function (event) {
  console.log(event);
});
//매개변수에 이벤트가 들어갈 수 있음. 보통 event나 e로 씀
//click 이벤트를 벌였을 때는 click이란 이벤트를 했을 때 console.log에 찍힘

input.addEventListener("keydown", function (event) {
  // console.log(event);
  console.log(event.key);
  console.log(event.code);
  if (event.key === "ArrowDown") {
    console.log("down");
    //document.write("down");이건 왜 안 됨?
  } else if (event.key === "ArrowUp") {
    console.log("up");
  } else if (event.key === "ArrowRight") {
    console.log("right");
  } else if (event.key === "ArrowLeft") {
    console.lol("left");
  } else {
    console.log("others");
  }
});
//keydown은 키보드랑 관련된 이벤트
//event는 key라는 값과 code라는 값을 가지고 있음(콘솔창 보면 알 수 있음)
//밑에는 방향키 위 아래 왼쪽 오른쪽 누르면 누를때마다 up, down, left, right 찍기

//0707.02 변경이벤트*
const chgInput = document.getElementById("change-input");
chgInput.addEventListener("input", () => {
  console.log("변경중");
  let div = document.querySelector(".box");
  div.innerHTML = chgInput.value;

  //input의 현재 변경사항이 존재하는 순간을 계속 인식
  //shift, control등 입력값 변하지 않는다면 이벤트 발생
});

//change는 input에만 되는 거. input에 변경이 일어나고
//다른 요소를 클릭해서 focus out 시키면 이벤트 발생됨
//input내용 변경 될 때마다 변경중 하고 다른데 클릭해서 끝내면 "변경되었어요"됨
chgInput.addEventListener("change", () => {
  console.log("변경되었어요~");
});

//0702 2교시*
//폼이 제출되는 이벤트로 'submit'은 폼 자체에 적용하는 이벤트
const todoForm = document.querySelector("#todo-form");
const todos = document.querySelector(".todos");
todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  //폼이 실제로 제출되지 않도록 이벤트를 막음
  //새로고침 방지를 위해 해줌
  const todoInput = document.querySelector('[name="todo"]');
  //속성 선택을 위해선 대괄호
  //[name=todo] 따옴표 똑같은 거 두 개 쓰면 안 됨
  console.log(todoInput.value);
  //input은 text나 html이 아닌 value로 가져오는 거! 꼭 기억!

  // const todo = todoInput.value;
  // const li = document.createElement("li");
  // //<li><li>
  // li.append(todo);
  // //textContent대신 append 써도 됨
  // //<li>안녕하세요</li>
  // todos.append(li);

  //과제 : 문자열 관련된 메소드로 공백이 들어오는 걸 막으려면?
  if (todoInput.value.trim !== "") {
    //여기 뭔가 빠짐.. 위에
    const li = document.createElement("li");
    li.append(todoInput.value);
    todos.append(li);
  }

  todoInput.value = "";
  //value로 input 값을 제어할 수 있다??
});
