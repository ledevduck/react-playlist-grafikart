class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Joe",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e);
  }

  render() {
    return (
      <div>
        <label htmlFor="name">My name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.querySelector("#app"));
