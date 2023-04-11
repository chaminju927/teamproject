let patientNo = 0;

patientNo = 7

if(patientNo > 0) {
  fetch(`http://192.168.0.7:8080/patients/${patientNo}`, {
    method: 'GET'
  })
  .then(response => response.json())
  .then(data => {
    if(data.status == "success"){
      data = data.data;
      console.log(data);

      document.querySelector(".patients-name").innerText = data.name
      document.querySelector(".patients-name").innerHTML = document.querySelector(".patients-name").innerHTML + `<span class="patients-gender">${data.gender ? data.gender : "-"}</span>`

      document.querySelector(".patients-id").innerText = data.id
      document.querySelector(".change-id").value = data.id

      document.querySelector(".patients-birth").innerText = data.birth
      document.querySelector(".patients-tel").innerText = data.tel
      document.querySelector(".change-tel").value = data.tel

      document.querySelector(".patients-addr").innerText = data.addr
      document.querySelector(".change-addr").value = data.addr

      document.querySelector(".patients-email").innerText = data.email
      document.querySelector(".change-email").value = data.email
      
      document.querySelector(".patients-drug").innerText = data.drug
      document.querySelector(".change-drug").value = data.drug
      document.querySelector(".change-phy").value = data.phy
    }else {
      console.log("잘못 된 회원 정보")
    }
  })
}
var popupWidth = 320;
var popupHeight = 450;

var popupX = (window.screen.width / 2) - (popupWidth / 2);

var popupY= (window.screen.height / 2) - (popupHeight / 2);

function tel() {
  console.log(11)
  window.open("tel-input.html",  "popupNo1", 'status=no, height=' + popupHeight  + ', width=' + popupWidth  + ', left='+ popupX + ', top='+ popupY);
}

$(".change-btn").click(() => {
  let formData = new FormData();
  formData.append("id", document.querySelector(".change-id").value);
  formData.append("tel", document.querySelector(".change-tel").value);
  formData.append("addr", document.querySelector(".change-addr").value);
  formData.append("gender", '1');
  formData.append("email", document.querySelector(".change-email").value);
  formData.append("drug", document.querySelector(".change-drug").value);
  formData.append("phy", document.querySelector(".change-phy").value);

  fetch(`http://192.168.0.7:8080/patients/${patientNo}`, {
    method: 'PUT',
    body: formData,
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
    window.location = ""
  })
})