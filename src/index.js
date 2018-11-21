import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: 1,
            longitude: 2,
            hasGeoError: false,
            errorMessage: "Error retrieving coordinates"
        }
        this.getCoordinates();
    }

    render() {
        return (
            <div>
                {this.state.hasGeoError &&
                    <h2>{this.state.errorMessage}</h2>
                }
                <p>latitude: {this.state.latitude}</p>
                <p>longitude: {this.state.longitude}</p>
                <SeasonDisplay />
            </div>
        );
    }

    getCoordinates() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    hasGeoError: false,
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
            },
            (error) => {
                this.setState({
                    hasGeoError: true,
                    errorMessage: error.message
                });
            }
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)