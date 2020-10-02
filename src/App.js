import React from "react";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = { latitude: 40 };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude });
      },
      (err) => console.log(err)
    );
  }
  render() {
    return <div>Latitude: {this.state.latitude}</div>;
  }
}

export default App;
