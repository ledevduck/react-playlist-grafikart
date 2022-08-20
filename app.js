function Welcome(props) {
  console.log(props);
  return <h1>Hello {props.name}</h1>;
}

ReactDOM.render(<Welcome name="Joe" />, document.querySelector("#app"));
