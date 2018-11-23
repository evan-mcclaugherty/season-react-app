import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    //babel turns this into a constructor so this is a shortcut
    state = {
        latitude: false,
        errorMessage: false
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.latitude) {
            return <h2>{this.state.errorMessage}</h2>
        }
        if (this.state.latitude && !this.state.errorMessage) {
            return <SeasonDisplay latitude={this.state.latitude} />
        }
        return <Spinner message='Please accept location request...'/>
    }
 
    render() {
        return (
            <div className='border red'>
                {this.renderContent()}
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