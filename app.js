class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "demo2",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <label htmlFor="name">My name</label>
        <select value={this.state.name} onChange={this.handleChange}>
          <option value="demo1">Demo 1</option>
          <option value="demo2">Demo 2</option>
          <option value="demo3">Demo 3</option>
        </select>
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.querySelector("#app"));
