console.log(document.getElementsByName("name"));
//이거는 아무 값이 안 나와야되는 거 아님? 아예 오류 아님??*************************************nodelist로 뜨는데..
//nodeList[] length:0 이 값이 왜 나오는거임? 그냥 없다는 뜻임?

console.log(document.querySelector("[name='id']"));
//여기서 name id인게 두 개있는데 쿼리셀렉터는 첫번째것만 선택해주는 거 알고 있음. 그럼 두번째거 선택하려면??
//인덱스[]넣어도 안 되던데?? 만약에 두번째 input 선택해주고 싶으면???***************************
