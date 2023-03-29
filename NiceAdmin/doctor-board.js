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
    // return (
    // );
  }
}

if(window.localStorage.getItem("boardNo") != null){
  let str = window.localStorage.getItem("boardNo");
  console.log(str)
  fetch("http://192.168.0.7:8080/boardNo", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ // 스프링에 전달할 값
      no: str
    })
  })
  .then(response => response.json())
  .then(data => {
    data = data.data;
    console.log(data);
    $(".board-title").html("제목 : " + data.title);
    $(".board-pain").html("증상 : " + data.pain);
    $(".board-another").html("그 외 전달사항 : " + (data.another.split(",")[5] != "null" && data.another.split(",")[5].length > 0 ? data.another.split(",")[5] : "-"));
    $(".board-name").val(data.another.split(",")[0] != "null" && data.another.split(",")[0].length > 0 ? data.another.split(",")[0] : "-");
    $(".board-gender").val(data.another.split(",")[2] != "null" && data.another.split(",")[2].length > 0 ? data.another.split(",")[2] : "-");
    $(".board-age").val(data.another.split(",")[1] != "null" && data.another.split(",")[1].length > 0 ? data.another.split(",")[1] : "-");
    $(".board-addr").val(data.another.split(",")[4] != "null" && data.another.split(",")[4].length > 0 ? data.another.split(",")[4] : "-");
    $(".board-tel").val(data.another.split(",")[3] != "null" && data.another.split(",")[3].length > 0 ? data.another.split(",")[3] : "-");
  })
}

