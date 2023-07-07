//$('')=document.querySelector('') 쉽죠?

console.log($("button"));
//괄호 조심
$("button").css("color", "red");

function submitjs() {
  document.querySelector(".div1").innerHTML = "<b>반갑습니다여</b>";
  document
    .querySelector(".div1")
    .setAttribute("style", "border: 2px solid red;");
}

function submitjq() {
  $(".div1").html("<i>잘 지내요</i>");
  $(".div1").css("border", "3px dotted blue");
}
