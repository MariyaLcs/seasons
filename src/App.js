import React from "react";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = { latitude: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
  render() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.latitude) {
      return <div>Latitude: {this.state.latitude}</div>;
    }
    return <div>Loading!</div>;
  }
}

export default App;
