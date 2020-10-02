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
          <h2>Latitude: {this.state.latitude} </h2>
          <p>
            <SeasonDisplay lat={this.state.latitude} />
          </p>
        </div>
      );
    }
    return <div>Loading!</div>;
  }
}

export default App;
