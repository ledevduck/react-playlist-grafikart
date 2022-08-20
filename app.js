class Field extends React.Component {
  render() {
    const { name, value, onChange, children } = this.props;
    return (
      <div className="form-group">
        <label htmlFor={name}>{children}</label>
        <input
          type="text"
          value={value}
          onChange={onChange}
          id={name}
          name={name}
          className="form-control"
        />
      </div>
    );
  }
}

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
      <div className="container">
        <Field name="name" value={this.state.name} onChange={this.handleChange}>
          Name
        </Field>
        <Field
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}
        >
          First Name
        </Field>
        {JSON.stringify(this.state)}
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.querySelector("#app"));
