
tbody = document.querySelector('#community-list');


fetch('http://localhost:8080/community/list')
  .then((response) => {
    return response.json();
  })
  .then((data) => {

    function categoryName(category) {
      switch (category) {
        case 1 :
          return '자유게시판';
        case 2 :
          return '의학뉴스';
        case 3 :
          return '질문게시판';
        default : 
          return '-';
      }
    }
   
    var html = '';
    for (var row of data.data) {
      html += `<tr>
          <td>${row.no}</td>
          
          <td><a href="community-view.html?no=${row.no}">${row.title}</a></td>
          <td>${row.doctorName}</td>
          <td>${categoryName(row.category)}</td>
          <td>${row.viewCnt}</td>
          <td>${row.createdDate}</td>
          </tr>\n`;
    }
    console.log(data);
    tbody.innerHTML = html;
  })
  .catch((err) => {
    alert('서버 요청 오류!');
    console.log(err);
  });
