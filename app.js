function BoilingVerdict({ celsius }) {
  if (celsius >= 100) {
    return <div className="alert alert-success">BOIL</div>;
  }
  return <div className="alert alert-info">Stable</div>;
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      temperature: e.target.value,
    });
  }

  render() {
    const { temperature } = this.state;
    return (
      <div>
        <div className="form-group">
          <label htmlFor="celsius">Celsius Temperature</label>
          <input
            className="form-control"
            type="text"
            id="celsius"
            value={temperature}
            onChange={this.handleChange}
          />
        </div>
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById("app"));
