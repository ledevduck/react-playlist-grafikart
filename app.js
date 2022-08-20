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
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <input
          type="number"
          id="temperature"
          name="temperature"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <BoilingVerdict celsius={this.state.value} />
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById("app"));
