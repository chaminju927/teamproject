class Board extends React.Component {
  constructor(props) {
    super(props);
    props = props.props;
    this.state = {
    }
  }
  render() {
    // return (
    // );
  }
}

function BoardImg(props) {
  return (<img className="d-block w-100" src={props.url} alt="..." style={{wight:490, height:300}}></img>)
}

class BoardImgDiv extends React.Component {
  constructor(props) {
    super(props);
    props = props.props;
    this.state = {
      img: props.url,
      count: props.count
    }
  }
  render() {
    if(this.state.count == 0){
      return(
        <div className="carousel-item active">
          <BoardImg url={this.state.img} />
        </div>
      )
    }
    return(
      <div className="carousel-item">
        <BoardImg url={this.state.img} />
      </div>
    )
  }
}

if (window.localStorage.getItem("boardNo") != null) {
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
      $(".board-title").html("제목 : " + data.title);
      $(".board-pain").html("증상 : " + data.pain);
      $(".board-another").html("그 외 전달사항 : " + (data.another.split(",")[5] != "null" && data.another.split(",")[5].length > 0 ? data.another.split(",")[5] : "-"));
      $(".board-name").val(data.another.split(",")[0] != "null" && data.another.split(",")[0].length > 0 ? data.another.split(",")[0] : "-");
      $(".board-gender").val(data.another.split(",")[2] != "null" && data.another.split(",")[2].length > 0 ? data.another.split(",")[2] : "-");
      $(".board-age").val(data.another.split(",")[1] != "null" && data.another.split(",")[1].length > 0 ? data.another.split(",")[1] : "-");
      $(".board-addr").val(data.another.split(",")[4] != "null" && data.another.split(",")[4].length > 0 ? data.another.split(",")[4] : "-");
      $(".board-tel").val(data.another.split(",")[3] != "null" && data.another.split(",")[3].length > 0 ? data.another.split(",")[3] : "-");
    })

  fetch("http://192.168.0.7:8080/findAllBoardImg", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ // 스프링에 전달할 값
      bno: str
    })
  }).then(response => response.json())
    .then(data => {
      let coin = 0;
      if (data.status == "success") {
        data = data.data;
        let imgs = [];
        data.forEach(value => {
          // let url = value.url;
          value.count = coin++;
          imgs.push(<BoardImgDiv props={value} />)
        });
        console.log(imgs)
        ReactDOM.createRoot(document.getElementById('imgs')).render(
          imgs
        );
      }

    })
}