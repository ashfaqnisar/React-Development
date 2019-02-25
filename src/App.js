import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

const Card = (props) => {
    return (
        <div className={"App"}>
            <header className={"App-header"}>
                <img className={"Image"} src={props.avatar_url}/>
                <div className={"details"}>
                    <div className={"Name"}>{props.name}</div>
                    <div className={"Company"}>{props.company}</div>
                </div>
            </header>
        </div>
    );
};


const CardList = (props) => {


    return (
        <div className={"App"}>
            {props.cardData.map(mappedData => <Card key={mappedData.id} {...mappedData}/>)}
        </div>
    )
};

class Form extends Component {
    state = {userName: ''};

    handleSubmit = (event) => {
        event.preventDefault()
        console.log("Data  provided " + this.state.userName);
        axios.get("https://api.github.com/users/" + this.state.userName)
            .then(resp => {
                this.props.onSubmit(resp.data)
                this.setState({userName: ""})
            })
    };

    render() {
        return (
            <div className={"App"}>
                <header className={"App-header"}>
                    <form onSubmit={this.handleSubmit}>
                        <label>Username</label>
                        <input
                            type={"text"}
                            value={this.state.userName}
                            onChange={(event) => this.setState({userName: event.target.value})}
                            placeholder={"Enter the username"}
                            required={true}
                        />
                        <br/>
                        <button className={"submit-button"} type={"submit"}>Submit</button>
                    </form>
                </header>

            </div>

        )
    }
}

class App extends Component {
    state = {
        data: []
    };

    addNewCard = (cardInfo) => {
        console.log(cardInfo)
        this.setState(previous => ({
                data: previous.data.concat(cardInfo)
            })
        )
    };

    render() {
        return (
            <div>
                <Form onSubmit={this.addNewCard}/>
                <CardList cardData={this.state.data}/>
            </div>

        );
    }
}

export default App
