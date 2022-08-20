let n = 0;

function render() {
  const title = <h1>Hello World</h1>;
  React.createElement("span", {}, n);

  ReactDOM.render(title, document.querySelector("#app"));
}

render();

window.setInterval(() => {
  n++;
  render();
}, 1000);
