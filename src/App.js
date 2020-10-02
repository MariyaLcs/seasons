import React from "react";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  state = { latitude: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ latitude: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  render() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.latitude) {
      return (
        <div>
          <SeasonDisplay lat={this.state.latitude} />
          <br />
          <h4>Latitude: {this.state.latitude} </h4>
        </div>
      );
    }
    return <div>Loading!</div>;
  }
}

export default App;
