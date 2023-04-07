const urlParams = new URL(location.href).searchParams;
const no = urlParams.get('no');

fetch(`http://localhost:8080/community/${no}`)
.then((response) => {
  return response.json();
})
.then((data) => {

  console.log(data);
    if (data.status == 'failure') {
      alert('서버 요청 오류!');
      console.log(data);
      return;
    }
  document.querySelector('#title').value = data.data.title;
  document.querySelector('#category').value = data.data.category;
  document.querySelector('#doctorName').value = data.data.doctorName;
  document.querySelector('#createdDate').value = data.data.createdDate;
  document.querySelector('#content').value = data.data.content;
  if(data.photo.length >0 ) {
    $('#comImg')[0].src = data.photo[0].imgUrl;
  } else {
    $(".photocover").html("")
  }
   console.log(data.photo[0].imgUrl)
})
.catch((err) => {
  alert('서버 요청 오류!');
  console.log(err);
});

document.querySelector('#former-btn').onclick = (e) => {
  location.href='community-list.html';
};

//document.querySelector('#img-update').onclick = (e) => {
  // 사진  변경
//}


document.querySelector('#update-btn').onclick = (e) => {
 
  fetch("http://localhost:8080/community/update", {
    method: "PUT",
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      doctorNo: 10,
      title: document.querySelector('#title').value,
      category: document.querySelector('#category').value,
      content: document.querySelector('#content').value,
      doctorName: document.querySelector('#doctorName').value,
      createdDate: document.querySelector('#createdDate').value,
      filter: 0,
      area: 0
      //Img:  $('#comImg')[0].src
    }),
    mode: 'cors'
  })
  .then((response) => response.json())
  .then((data) => {
    console.log("성공:", data);
    //submitFiles(data.data.no);
  })
  .catch((error) => {
    console.error("실패:", error);
  });
};