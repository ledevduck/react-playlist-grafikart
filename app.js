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

  componentDidMount() {
    this.timer = window.setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  tick() {
    this.setState({ date: new Date() });
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
    this.state = { n: props.start, timer: null };
  }

  componentDidMount() {
    this.play();
  }

  componentWillUnmount() {
    this.pause();
  }

  increment() {
    this.setState((state, props) => ({ n: state.n + props.step }));
  }

  pause() {
    window.clearInterval(this.state.timer);
    this.setState({
      timer: null,
    });
  }

  play() {
    this.setState({
      timer: window.setInterval(this.increment.bind(this), 1000),
    });
  }

  render() {
    return (
      <div>
        Value : {this.state.n}
        <button onClick={this.pause.bind(this)}>Pause</button>
        <button onClick={this.play.bind(this)}>Play</button>
      </div>
    );
  }
}

Incrementer.defaultProps = {
  start: 0,
  step: 1,
};

function Home() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
      <Incrementer />
    </div>
  );
}

ReactDOM.render(<Home />, document.querySelector("#app"));
