let n = 0;

function numberFormat(n) {
  return n.toString().padStart(2, "0");
}

function render() {
  const items = ["Tache 1", "Tache 2", "Tache 3"];
  const title = (
    <React.Fragment>
      <h1 className={"title" + n}>
        Hello World <span>{n}</span>
      </h1>
      <ul>
        <li></li>
      </ul>
    </React.Fragment>
  );

  ReactDOM.render(title, document.querySelector("#app"));
}

render();

window.setInterval(() => {
  n++;
  render();
}, 1000);
