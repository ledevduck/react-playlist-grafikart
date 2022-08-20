class Home extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="name">My name</label>
        <input type="text" id="name" name="name" />
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.querySelector("#app"));
