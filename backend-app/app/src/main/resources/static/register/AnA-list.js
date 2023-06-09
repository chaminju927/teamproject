const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


fetch(`http://localhost:8080/qna`)
  .then(response => response.json())
  .then(data => {
    if(data.status == "success") {
      console.log(data)
      return data.data
    }
  })
  .then(data => {
    let lilist = [];
    data.forEach(user => {
      console.log(user)
      lilist.push(<Li data={user} />)
    });
    return lilist;
  })
  .then((list) => {
    ReactDOM.createRoot(document.querySelector(".chat-list")).render(list)
  })

function Li(params) {
  return (
    <li className="chat-left list-group-item" onClick={() => {
      location.href = `AnA-admin.html?no=${params.data.no}`
    }}>
      <div className="list-box">
        <span id="list-title">제목 : {params.data.title}</span>
        <span id="list-name">작성자 : {params.data.pname}</span>
      </div>
    </li>
  )
}
