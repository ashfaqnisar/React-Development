import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = {counter: 0};
    handleClick = () => {
        this.setState((previous) => {
            return {
                counter: previous.counter + 1
            }
        })
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <button onClick={this.handleClick}>
                        {this.state.counter}
                    </button>
                </header>

            </div>
        );
    }
}

export default App
