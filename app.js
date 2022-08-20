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

class Clock extends React.Component {
  render() {
    const date = new Date();
    return (
      <div>
        It is {date.toLocaleDateString()} {date.toLocaleTimeString()}
      </div>
    );
  }
}

function Home() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
      <Clock />
    </div>
  );
}

ReactDOM.render(<Home />, document.querySelector("#app"));
