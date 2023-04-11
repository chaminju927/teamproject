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
      console.log(data)
      document.querySelector(".patients-name").innerText = data.name
      document.querySelector(".patients-name").innerHTML = document.querySelector(".patients-name").innerHTML + `<span class="patients-gender">${data.gender ? data.gender : "-"}</span>`
      document.querySelector(".patients-id").innerText = data.id
      document.querySelector(".patients-birth").innerText = data.birth
      document.querySelector(".patients-tel").innerText = data.tel
      document.querySelector(".patients-addr").innerText = data.addr
      document.querySelector(".patients-email").innerText = data.email
      document.querySelector(".patients-drug").innerText = data.drug
    }else {
      console.log("잘못 된 회원 정보")
    }
  })
}