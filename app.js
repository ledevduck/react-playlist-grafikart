let n = 0;

function numberFormat(n) {
  return n.toString().padStart(2, "0");
}

function render() {
  const title = (
    <h1 className={"title" + n}>
      Hello World <span>{n}</span>
    </h1>
  );

  ReactDOM.render(title, document.querySelector("#app"));
}

render();

window.setInterval(() => {
  n++;
  render();
}, 1000);
