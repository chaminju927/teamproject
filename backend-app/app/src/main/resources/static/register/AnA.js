// fetch(`http://localhost:8080/qna/${1}`)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//     let lilist = [];
//     data.data.content.split(",").forEach(text => {
//       let content = text.split(":")[0];
//       let user = text.split(":")[1];
//       if(user == "질문자") {
//         lilist.push(<Lli text = {content} />)
//       }
//     })
//     return lilist;
//   })
//   .then(list => {
//     ReactDOM.createRoot(document.querySelector(".chat-list")).render(list)
// })
reflash()
$(".chat-btn").click(() => {
  fetch("http://localhost:8080/qna", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ // 스프링에 전달할 값
      content: $(".chat-text").val(),
      mno: 1
    })
  })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
})



function Lli(params) {
  return (
    <li className="chat-left">
      <div>
        <span>{params.text}</span>
      </div>
    </li>
  )
}

function Rli(params) {
  return (
    <li className="chat-right">
      <div>
        <span>{params.text}</span>
      </div>
    </li>
  )
}


/*

<li className="chat-left">
  <div>
    <span>1</span>
  </div>
</li>

<li className="chat-right">
  <div>
    <span>1</span>
  </div>
</li>

*/

function reflash() {
  fetch(`http://localhost:8080/qna/${1}`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    let lilist = [];
    data.data.content.split(",").forEach(text => {
      let content = text.split(":")[0];
      let user = text.split(":")[1];
      if(user == "질문자") {
        lilist.push(<Lli text = {content} />)
      }
    })
    return lilist;
  })
  .then(list => {
    ReactDOM.createRoot(document.querySelector(".chat-list")).render(list)
})
}