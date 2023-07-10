/*jq val() 사용*/
function getValue() {
  // input의 value를 가지고와서
  // alert 창에 띄워줌
  const value = $("input").val();
  alert(value);
}
function setValue() {
  $("input").val("설정 완료 ~~");
}
//여기서 input 값은 어디로 가고 그냥 설정완료가 뜨는거?********************
