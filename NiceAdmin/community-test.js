  document.querySelector('#btn-submit').onclick = (e) => {
	 
    
    var doctorNo = 1;
    var title = document.querySelector('#title').value;
    var content = document.querySelector('#content').value;
    var category = Number(document.querySelector('#category').value);
   //var viewCnt;
    var filter = 0;
    var area = 0;

   const data = {title, content, category, createdDate};
 };

 
//  const data = {
//        doctorNo: "1",
//        title: "test",
//        content:"test contents",
//        category: "1",
//        createdDate: new Date(),
//        viewCnt: "311",
//        filter: "1", //보류
//        area: "2",  //일단 전체공개 0
//      };

     fetch("http://localhost:8080/community", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(data),
     })
       .then((response) => response.json())
       .then((data) => {
         console.log("성공:", data);
       })
       .catch((error) => {
         console.error("실패:", error);
       });
 
