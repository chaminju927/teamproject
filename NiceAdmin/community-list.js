  document.querySelector('#btn-submit').onclick = (e) => {
	 
    
    var doctorNo = 1;
    var title = document.querySelector('#title').value;
    var content = document.querySelector('#content').value;
    var category = Number(document.querySelector('#category').value);
   //var viewCnt;
    var filter = 0;
    var area = 0;

   const data = {doctorNo, title, content, category, filter, area};
 };

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
 
