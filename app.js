const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

function BoilingVerdict({ celsius }) {
  if (celsius >= 100) {
    return <div className="alert alert-success">BOIL</div>;
  }
  return <div className="alert alert-info">Stable</div>;
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      temperature: e.target.value,
    });
  }

  render() {
    const { temperature } = this.state;
    const name = "scale" + this.props.scale;
    const scaleName = scaleNames[this.props.scale];
    return (
      <div className="form-group">
        <label htmlFor={name}>{scaleName} Temperature</label>
        <input
          className="form-control"
          type="text"
          id={name}
          value={temperature}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "",
    };
  }

  render() {
    const { temperature } = this.state;
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById("app"));
