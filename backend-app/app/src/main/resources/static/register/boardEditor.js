class Pbtr extends React.Component {
  constructor(props) {
    super(props);
    props = props.props;
    this.state = props
  }
  render() {
    if (this.state.filter) {
      return (
        <tr onClick={() => {

        }}>
          <th>{this.state.name}</th>
          <td>{this.state.title}</td>
          <td>{this.state.ano != "null" ? this.state.ano : "-"}</td>
          <td><button
            type="button"
            className="btn btn-success"
            style={{ width: 50, height: 25, padding: 0, fontSize: "70%" }}
            onClick={() => {
              ReactDOM.createRoot($(".new-windows")[0]).render(<Pboardc props={this.state} />);
            }}
          >
            검증
          </button></td>
          <td>{this.state.createdDate}</td>
        </tr>
      );
    } else {
      return (
        <tr onClick={() => {

        }}>
          <th>{this.state.name}</th>
          <td>{this.state.title}</td>
          <td>{this.state.ano != "null" ? this.state.ano : "-"}</td>
          <td><button
            type="button"
            className="btn btn-danger"
            style={{ width: 50, height: 25, padding: 0, fontSize: "70%" }}
            onClick={() => {
              ReactDOM.createRoot($(".new-windows")[0]).render(<Pboard props={this.state} />);
            }}
          >
            검증필요
          </button></td>
          <td>{this.state.createdDate}</td>
        </tr>
      );
    }
  }
}

class Dctr extends React.Component {
  constructor(props) {
    super(props);
    props = props.props;
    this.state = props
  }
  render() {
    if (this.state.filter) {
      return (
        <tr onClick={() => {

        }}>
          <th>{this.state.doctorName}</th>
          <td>{this.state.title}</td>
          <td>{this.state.content}</td>
          <td><button
            type="button"
            className="btn btn-success"
            style={{ width: 50, height: 25, padding: 0, fontSize: "70%" }}
          >
            증명
          </button></td>
          <td>{this.state.createdDate}</td>
        </tr>
      );
    } else {
      return (
        <tr onClick={() => {

        }}>
          <th>{this.state.doctorName}</th>
          <td>{this.state.title}</td>
          <td>{this.state.content}</td>
          <td><button
            type="button"
            className="btn btn-danger"
            style={{ width: 50, height: 25, padding: 0, fontSize: "70%" }}
          >
            증명필요
          </button></td>
          <td>{this.state.createdDate}</td>
        </tr>
      );
    }
  }
}


fetch("http://localhost:8080/boardSearch")
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    let patients = [];
    data.forEach(patient => {
      patient.name = patient.another.split(",")[0];
      patient.ano = patient.another.split(",")[5];

      if (patient.title.length > 8) {
        patient.title = patient.title.substring(0, 8) + ". . ."
      }
      if (patient.ano.length > 6) {
        patient.ano = patient.ano.substring(0, 6) + ". . ."
      }

      patients.push(<Pbtr props={patient} />)
    });
    return patients;
  })
  .then(list => {
    ReactDOM.createRoot($(".patients-members")[0]).render(
      list
    )
  })

fetch("http://localhost:8080/community/list")
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    let doctors = [];
    data.data.forEach(doctor => {
      if (doctor.title.length > 6) {
        doctor.title = doctor.title.substring(0, 6) + ". . ."
      }
      if (doctor.content.length > 6) {
        doctor.content = doctor.content.substring(0, 6) + ". . ."
      }
      doctors.push(<Dctr props={doctor} />)
    });
    return doctors;
  })
  .then(list => {
    ReactDOM.createRoot($(".doctors-members")[0]).render(
      list
    )
  })

function Pboard(props) {
  return (
    <div className="new-window">
      <div className="form-check form-switch window-check-cover">
        <label className="form-check-label window-check-text">검증 여부</label>
        <input
          className="form-check-input window-check"
          type="checkbox"
          role="switch"
        />
      </div>
      <div className="top-content">
        제목 :
        <input type="text" className="form-control board-title" placeholder="" defaultValue={props.props.title} />
        증상 :
        <input type="text" className="form-control board-pain" placeholder="" defaultValue={props.props.pain} />
      </div>
      <div className="middle-content">
        <h3>인적 사항</h3>
        이름 :
        <input type="text" className="form-control board-name" placeholder="" defaultValue={props.props.another.split(",")[0]} />
        나이 :
        <input type="text" className="form-control board-age" placeholder="" defaultValue={props.props.another.split(",")[1]} />
        연락처 :
        <input type="text" className="form-control board-tel" placeholder="" defaultValue={props.props.another.split(",")[3]} />
        주소 :
        <input type="text" className="form-control board-addr" placeholder="" defaultValue={props.props.another.split(",")[4]} />
      </div>
      <div className="bottom-content">
        <div className="form-floating">
          <textarea
            className="form-control board-another"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: 100 }}
            defaultValue={""}
          />
          <label htmlFor="floatingTextarea2" defaultValue={props.props.another.split(",")[5]}>특이사항</label>
        </div>
      </div>
      <div className="btn-content">
        <button type="button" className="btn btn-primary board-close" onClick={() => {
          ReactDOM.createRoot($(".new-windows")[0]).render();
        }}>
          닫기
        </button>
        <button type="button" className="btn btn-primary board-insert" onClick={() => {
          fetch("http://localhost:8080/auth/adminBoard", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ // 스프링에 전달할 값
              no: props.props.no,
              filter: $(".window-check").prop('checked')
            })
          })
            .then(response => response.json())
            .then(data => {

              ReactDOM.createRoot($(".new-windows")[0]).render();
              return data.status;
            })
            .then((status) => {
              if(status == "success")
                location.href = "";
            })
        }}>
          적용
        </button>
      </div>
    </div>

  )
}
function Pboardc(props) {

  return (
    <div className="new-window">
      <div className="form-check form-switch window-check-cover">
        <label className="form-check-label window-check-text">검증 여부</label>
        <input
          className="form-check-input window-check"
          type="checkbox"
          role="switch"
          defaultChecked="checked"
        />
      </div>
      <div className="top-content">
        제목 :
        <input type="text" className="form-control board-title" placeholder="" defaultValue={props.props.title} />
        증상 :
        <input type="text" className="form-control board-pain" placeholder="" defaultValue={props.props.pain} />
      </div>
      <div className="middle-content">
        <h3>인적 사항</h3>
        이름 :
        <input type="text" className="form-control board-name" placeholder="" defaultValue={props.props.another.split(",")[0]} />
        나이 :
        <input type="text" className="form-control board-age" placeholder="" defaultValue={props.props.another.split(",")[1]} />
        연락처 :
        <input type="text" className="form-control board-tel" placeholder="" defaultValue={props.props.another.split(",")[3]} />
        주소 :
        <input type="text" className="form-control board-addr" placeholder="" defaultValue={props.props.another.split(",")[4]} />
      </div>
      <div className="bottom-content">
        <div className="form-floating">
          <textarea
            className="form-control board-another"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: 100 }}
            defaultValue={""}
          />
          <label htmlFor="floatingTextarea2" defaultValue={props.props.another.split(",")[5]}>특이사항</label>
        </div>
      </div>
      <div className="btn-content">
        <button type="button" className="btn btn-primary board-close" onClick={() => {
          ReactDOM.createRoot($(".new-windows")[0]).render();
        }}>
          닫기
        </button>
        <button type="button" className="btn btn-primary board-insert" onClick={() => {
          fetch("http://localhost:8080/auth/adminBoard", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ // 스프링에 전달할 값
              no: props.props.no,
              filter: $(".window-check").prop('checked')
            })
          })
            .then(response => response.json())
            .then(data => {

              ReactDOM.createRoot($(".new-windows")[0]).render();
              return data.status;
            })
            .then((status) => {
              if(status == "success")
                location.href = "";
            })
        }}>
          적용
        </button>
      </div>
    </div>

  )
}

let patientsBoardList = <Pboard props={0} />;

