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
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  tick() {
    this.setState({ date: new Date() });
  }

  componentDidMount() {
    this.timer = window.setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        It is {this.state.date.toLocaleDateString()}{" "}
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}

class Incrementer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { n: props.start };
    this.timer = null;
  }
  increment() {
    this.setState((state, props) => ({ n: state.n + 1 }));
  }

  componentDidMount() {
    this.timer = window.setInterval(this.increment.bind(this), 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  render() {
    return <div>Value : {this.state.n}</div>;
  }
}

function Home() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
      <Clock />
      <Incrementer start={10} />
    </div>
  );
}

ReactDOM.render(<Home />, document.querySelector("#app"));
