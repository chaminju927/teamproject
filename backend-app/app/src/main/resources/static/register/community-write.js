// 로그인 정보 가져오기
let myno = 0;

fetch(`http://localhost:8080/auth/user`, {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    if (data.status == "success") {
      //옥동자 이름
      document.querySelector("#username").innerHTML = data.data.name;
      //옥동자 이미지
      const preImageContainer = document.querySelector("#pre-userimg");
      const phoUrl =
        "http://uyaxhfqyqnwh16694929.cdn.ntruss.com/member-img/" +
        data.data.phoUrl +
        "?type=f&w=36&h=36&quality=100&anilimit=24";
      const phoType = data.data.phoType;
      const phoName = data.data.phoName;

      // 기존의 이미지 요소 삭제
      const oldImg = document.querySelector("#userimg");
      if (oldImg) {
        oldImg.remove();
      }

      // 새로운 이미지 요소 생성 및 추가
      const newImg = document.createElement("img");
      newImg.setAttribute("id", "userimg");
      newImg.setAttribute("src", phoUrl);
      newImg.setAttribute("alt", phoName);
      newImg.setAttribute("style", "width:36px; border-radius:50%");
      preImageContainer.appendChild(newImg);
      return data.data;
    } else {
      location.href = "../auth/doctors-login.html";
    }
    return data.data;
  })
  .then((user) => {
    console.log(user.hosName !== undefined);
    if (user.hosName !== undefined) {
      myno = user.no;
    } else {
      console.log(user.hosName);
      location.href = "../auth/doctors-login.html";
    }
  });

// 게시글 입력
document.querySelector(".btn-submit").onclick = (e) => {
  fetch("http://localhost:8080/community", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      doctorNo: myno,
      title: document.querySelector("#title").value,
      content: document.querySelector(".content").value,
      category: Number(document.querySelector("#category").value),
      filter: 0,
      area: 0,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("성공:", data);
      submitFiles(data.data.no);
      location.href = "doctors-community-main.html";
    })
    .catch((error) => {
      console.error("실패:", error);
    });
};

function submitFiles(no) {
  console.log(no);
  let formData = new FormData();
  let files = document.querySelector(".community-files").files;

  if (files.length == 0) {
    return;
  }

  for (let i = 0; i < files.length; i++) {
    if (
      files[i].name.includes(".bmp") ||
      files[i].name.includes(".jpeg") ||
      files[i].name.includes(".jpg") ||
      files[i].name.includes(".gif") ||
      files[i].name.includes(".png") ||
      files[i].name.includes(".tiff") ||
      files[i].name.includes(".psd") ||
      files[i].name.includes(".tga") ||
      files[i].name.includes(".ai") ||
      files[i].name.includes(".svg") ||
      files[i].name.includes(".exif") ||
      files[i].name.includes(".jfif")
    ) {
      formData.append("files", files[i]);

      formData.append("comNo", no); //  여기 입력되는 정수가 커뮤 번호여야 한다
    }
  }
  $.ajax({
    url: "http://localhost:8080/communityImg/insertComImg",
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
    type: "POST",
    success: function (data) {
      console.log("데이터 업로드 성공");
    },
    error: function (e) {
      console.log("데이터 업로드 실패");
    },
  });
}
