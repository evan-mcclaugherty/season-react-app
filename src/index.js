import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';


class App extends React.Component {
    //babel turns this into a constructor so this is a shortcut
    state = {
        latitude: false,
        errorMessage: false
    }

    render() {
        return (
            <div>
                {this.state.errorMessage &&
                    <h2>{this.state.errorMessage}</h2>
                }
                {this.state.latitude &&
                    <p>latitude: {this.state.latitude}</p>
                }
                <SeasonDisplay />
            </div>
        );
    }

    //good for data initialization
    //Only gets called 1 time
    componentDidMount() {
        console.log("Component DID mount")
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    errorMessage: false
                });
            },
            (error) => {
                this.setState({
                    latitude: false,
                    errorMessage: error.message
                });
            }
        );
    }

    //More data loading for when state/props change
    componentDidUpdate() {
        console.log("Component Did Update")
    }

    //cleanup method for cleanup.
    componentWillUnmount() {
        console.log("Component will unmount")
    }

    componentWillUpdate() {
        console.log("Component WILL update")
    }
    componentDidCatch() {
        console.log("Component DID catch")
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)