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
    console.log(this.props);
    return <h1>Hello World</h1>;
  }
}

ReactDOM.render(
  <Welcome name="Joe">Hello World</Welcome>,
  document.querySelector("#app")
);
