function Welcome({ name, children }) {
  return (
    <div>
      <h1>Hello {name}</h1>
      <p>{children}</p>
    </div>
  );
}

ReactDOM.render(
  <Welcome name="Joe">Hello World</Welcome>,
  document.querySelector("#app")
);
