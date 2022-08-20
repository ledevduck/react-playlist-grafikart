function WelcomeFunc({ name, children }) {
  return (
    <div>
      <h1>Hello {name}</h1>
      <p>{children}</p>
    </div>
  );
}

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

function Home() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
    </div>
  );
}

ReactDOM.render(<Home />, document.querySelector("#app"));
