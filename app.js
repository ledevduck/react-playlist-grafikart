class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Joe",
    };
  }

  render() {
    return (
      <div>
        <label htmlFor="name">My name</label>
        <input type="text" id="name" name="name" value={this.state.name} />
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.querySelector("#app"));
