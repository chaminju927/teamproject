const urlParams = new URL(location.href).searchParams;
const no = urlParams.get('no');

document.querySelector('#former-btn').onclick = (e) => {
  location.href='community-list.html';
};


Promise.all([
  fetch(`http://localhost:8080/community/${no}`),
  fetch(`http://localhost:8080/recomment/${no}`)
])
.then((responses) => Promise.all(responses.map((response) => response.json())))
.then((data) => {
  console.log(data);
  const communityData = data[0];
  const recommentData = data[1];

  //console.log(communityData);
  if (communityData.status == 'failure') {
    // alert('서버 요청 오류!');
   // console.log(communityData);
    return;
  }
  document.querySelector('#title').value = communityData.data.title;
  document.querySelector('#category').value = communityData.data.category;
  document.querySelector('#doctorName').value = communityData.data.doctorName;
  document.querySelector('#createdDate').value = communityData.data.createdDate;
  document.querySelector('#content').value = communityData.data.content;
  if(communityData.photo.length >0 ) {
    $('#comImg')[0].src = communityData.photo[0].imgUrl;
  } else {
    $("#comImg").attr('src', '');
    document.querySelector('#btn-img-delete').style.display = 'none';
  }
  // console.log(communityData.photo[0].imgUrl)
  // 두번째 fetch 요청 후
  var tbody = document.querySelector('#recomment-list');

  console.log(recommentData);

  var html = '';
  for (var row of recommentData.data) {
    html += `<tr>
        <td>${row.recNo}</td>
        <td><p>${row.recContent}</p></td>
        <td>${row.docName}</td> 
        <td>${row.createdDate}</td>
        </tr>\n`;
  }
  tbody.innerHTML = html;
})
.catch((err) => {
  //alert('서버 요청 오류!');
  console.log(err);
});


//댓글 입력
document.querySelector('#rec-save-btn').onclick = (e) => {

  fetch("http://localhost:8080/recomment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      docNo: 1,
      comNo: no,
      recContent: document.querySelector('.recomment').value
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("성공:", data);
      location.reload();

    })
    .catch((error) => {
      console.error("실패:", error);
    })
};



//게시물 내용 변경
document.querySelector('#update-btn').onclick = (e) => {
  fetch('http://localhost:8080/community',{
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      doctorNo: Number(1),
      no : no,
      title: document.querySelector('#title').value,
      category: document.querySelector('#category').value,
      content: document.querySelector('#content').value,
      filter: 0,
      area: 0
      //Img:  $('#comImg')[0].src
    }),
  })
  .then((response) => response.json())
  .then((data) => {
    console.log("성공:", data);
    location.reload();
    //submitFiles(data.data.no);
  })
  .catch((error) => {
    console.error("실패:", error);
  });
  };

  // 게시물 삭제
  document.querySelector('#delete-btn').onclick = (e) => {

    fetch(`http://localhost:8080/community/${no}`,{
      method: 'DELETE',
    })
    .then((response) => response.json())
    .then((data) => {
      console.log("성공:", data);
      location.href='community-list.html';
      
      if (data.status == 'failure') {
        alert('삭제 실패!\n' + data.data);
        return;
      }
    })
    .catch((error) => {
      console.error("실패:", error);
    });
    };

    
  //이미지만 삭제
    document.querySelector('#btn-img-delete').onclick = (e) => {

      fetch(`http://localhost:8080/communityImg/${no}`,{
      method: 'DELETE',
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.status == 'failure') {
        console.log('이미지 삭제 실패!\n' + data.data);
        return;
      } 
      console.log("성공:", data);
      document.querySelector('#btn-img-delete').style.display = 'none';
    })
    .catch((error) => {
      console.log("실패:", error);
    });
    };
  
