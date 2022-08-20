function BoilingVerdict({ celsius }) {
  if (celsius >= 100) {
    return <div className="alert alert-success">BOIL</div>;
  }
  return <div className="alert alert-info">Stable</div>;
}

ReactDOM.render(
  <React.Fragment>
    <BoilingVerdict celsius={50} />
    <BoilingVerdict celsius={110} />
  </React.Fragment>,
  document.getElementById("app")
);
