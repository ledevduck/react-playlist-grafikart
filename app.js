class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      checked: e.target.checked,
    });
  }

  render() {
    return (
      <div>
        <label htmlFor="name">My name</label>
        <input
          type="checkbox"
          checked={this.state.checked}
          onChange={this.handleChange}
        ></input>
        {this.state.checked ? <div>CHECKED</div> : null}
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.querySelector("#app"));
