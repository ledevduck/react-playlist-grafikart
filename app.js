const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function BoilingVerdict({ celsius }) {
  if (celsius >= 100) {
    return <div className="alert alert-success">BOIL</div>;
  }
  return <div className="alert alert-info">Stable</div>;
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const { temperature } = this.props;
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
      scale: "c",
      temperature: 20,
    };
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }

  handleCelsiusChange(temperature) {
    this.setState({
      scale: "c",
      temperature,
    });
  }

  handleFahrenheitChange(temperature) {
    this.setState({
      scale: "f",
      temperature,
    });
  }

  render() {
    const { temperature, scale } = this.state;
    const celsius = scale === "c" ? temperature : toCelsius(temperature);
    const fahrenheit = scale === "f" ? temperature : toFahrenheit(celsius);
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={celsius} />
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById("app"));
