class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Joe",
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
        <textarea
          id="name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        ></textarea>
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.querySelector("#app"));
