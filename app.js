class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      firstName: "",
      newsletter: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.name;
    const type = e.target.type;
    const value = type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            id="name"
            name="name"
          ></input>
        </div>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            value={this.state.firstName}
            onChange={this.handleChange}
            id="firstName"
            name="firstName"
          ></input>
        </div>
        <div>
          <label htmlFor="newsletter">Newsletter</label>
          <input
            type="checkbox"
            checked={this.state.newsletter}
            onChange={this.handleChange}
            id="newsletter"
            name="newsletter"
          ></input>
        </div>
        {JSON.stringify(this.state)}
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.querySelector("#app"));
