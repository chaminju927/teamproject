class Ptr extends React.Component {
  constructor(props) {
    super(props);
    props = props.props;
    this.state = props
  }
  render() {
    return (
      <tr onClick={() => {
        
      }}>
        <th>{this.state.id}</th>
        <td>{this.state.name}</td>
        <td>{this.state.drug}</td>
        <td>{this.state.phy}</td>
      </tr>
    );
  }
}

class Dtr extends React.Component {
  constructor(props) {
    super(props);
    props = props.props;
    this.state = props
  }
  render() {
    if (this.state.licenses) {
      return (
        <tr onClick={() => {
          
        }}>
          <th>{this.state.id}</th>
          <td>{this.state.name}</td>
          <td><button
            type="button"
            className="btn btn-success"
            style={{ width: 50, height: 25, padding: 0, fontSize: "70%" }}
          >
            증명
          </button></td>
          <td onClick={() => {

          }}>{this.state.hospital}</td>
        </tr>
      );
    } else {
      return (
        <tr onClick={() => {
          
        }}>
          <th>{this.state.id}</th>
          <td>{this.state.name}</td>
          <td><button
            type="button"
            className="btn btn-danger"
            style={{ width: 50, height: 25, padding: 0, fontSize: "70%" }}
          >
            증명필요
          </button></td>
          <td onClick={() => {
            
          }}>{this.state.hospital}</td>
        </tr>
      );
    }
  }
}

<button
  type="button"
  className="btn btn-danger"
  style={{ width: 50, height: 25, padding: 0, fontSize: "70%" }}
>
  증명필요
</button>

fetch("http://localhost:8080/patients")
  .then((response) => response.json())
  .then((data) => {
    let patients = [];
    data.data.forEach(patient => {
      patient.id = patient.id.substring(0, 2) + "**" + patient.id.slice(-2)
      patients.push(<Ptr props={patient} />)
    });
    return patients;
  })
  .then(list => {
    ReactDOM.createRoot($(".patients-members")[0]).render(
      list
    )
  })

fetch("http://localhost:8080/doctors")
  .then((response) => response.json())
  .then((data) => {
    let doctors = [];
    data.data.forEach(doctor => {
      doctor.id = doctor.id.substring(0, 2) + "**" + doctor.id.slice(-2)
      doctors.push(<Dtr props={doctor} />)
    });
    return doctors;
  })
  .then(list => {
    ReactDOM.createRoot($(".doctors-members")[0]).render(
      list
    )
  })