import React, {Component} from 'react';
import './App.css';

class Button extends Component {
    handleClick = () => {
        this.props.onClickFunction(this.props.incrementvalue)
    };

    render() {
        return (
            <div className={"App"}>
                <button onClick={this.handleClick}>
                    +{this.props.incrementvalue}
                </button>
            </div>

        )
    }
}

const Result = (props) => {
    return (
        <div className={"App"}>
            <label>{props.counter}</label>
        </div>
    )
};

class App extends Component {
    state = {counter: 0};

    incrementCounter = (incrementvalue) => {
        return (
            this.setState((previous) => {
                return {
                    counter: previous.counter + incrementvalue

                }
            })
        )
    };
    render() {
        return (
            <div>
                <Button incrementvalue={1} onClickFunction={this.incrementCounter}/>
                <Button incrementvalue={5} onClickFunction={this.incrementCounter}/>
                <Button incrementvalue={10} onClickFunction={this.incrementCounter}/>
                <Button incrementvalue={100} onClickFunction={this.incrementCounter}/>

                <Result counter={this.state.counter}/>
            </div>

        );
    }
}

export default App
