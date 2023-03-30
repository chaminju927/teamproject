

function Span(props) {
  return (<span className={props.data[1]}>{props.data[0]}</span>)
}
function Tds(props) {
  return (<td><Span data={props.data}></Span></td>)
}

function Td(props) {
  return (<td>{props.data}</td>)
}

class BoardLists extends React.Component {
  constructor(props) {
    super(props);
    props = props.props;
    this.state = {
      answer: props.answer,
      no: props.no,
      title: props.title,
      warn: props.warn,
      writer: props.writer,
      date: props.date,
      warnLevel: props.warnLevel
    }
  }
  render() {
    return (
      <tr onClick={() => {
        window.localStorage.setItem("boardNo", this.state.no)
        location.href= "doctors-records.html?no=" + this.state.no;
      }}>
        <Td data={this.state.answer}></Td>
        <Td data={this.state.no}></Td>
        <Td data={this.state.title}></Td>
        <Tds data={[this.state.warn, this.state.warnLevel]}></Tds>
        <Td data={this.state.writer}></Td>
        <Td data={this.state.date}></Td>
      </tr>
    );
  }
}

let lists;

fetch("http://192.168.0.7:8080/boardSearch", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ // 스프링에 전달할 값
    search: "",
    tags: $(".search-tags").val()
  })
})
.then(response => response.json())
.then(data => {
  let list = [];
  data.forEach(board => {

    let n = new Date();
    let countday = n.getDate()-board.createdDate.split("-")[2];
    let str = "";
    if(countday > 8){
      str = "badge bg-danger text-dark";
    } else if(countday > 5) {
      str = "badge bg-warning";
    } else {
      str = "badge bg-success";
    }

    let obj = {
      answer: "0",
      no: board.no,
      title: board.title,
      warn: "경고",
      warnLevel: str,
      writer: board.another.split(",")[0].length > 0 ? board.another.split(",")[0] : "-",
      date: board.createdDate,
    }
    list.push(<BoardLists props={obj}/>)
  });
  lists = list;
})

setTimeout(() => {
  ReactDOM.createRoot($(".table tbody")[0]).render(
    lists
  )
}, 51);