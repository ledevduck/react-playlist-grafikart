function Welcome(props) {
  console.log(props);
  return (
    <div>
      <h1>Hello {props.name}</h1>
      <p>{props.children}</p>
    </div>
  );
}

ReactDOM.render(
  <Welcome name="Joe">Hello World</Welcome>,
  document.querySelector("#app")
);
