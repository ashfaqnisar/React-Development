import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

const Card = (props) => {
    return (
        <div className={"App"}>
            <header className={"App-header"}>
                <img className={"Image"} src={props.avatar_url} alt={"avatar"}/>
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
const additionalHeaders = (headers) => {
    headers.HTTP2_HEADER_ACCESS_CONTROL_ALLOW_ORIGIN = '*'
};

const config = {
    headers: {
        "HTTP2_HEADER_ACCESS_CONTROL_ALLOW_ORIGIN": '*'
    },
    data: {},
};

class Form extends Component {
    state = {userName: ''};

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Data  provided " + this.state.userName);
    
        axios.head("https://cosmosvisas.com/ashfaq.json", config)
            .then(resp => {
                additionalHeaders(resp.headers);
                this.props.onSubmit(resp.data);
                this.setState({
                    userName: ""
                });
                console.log("fetched data: " + resp.data)
            }).catch(err => {
            console.log("Error: " + err)
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
                            value={this.state.userName}//Controlled Component
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
        console.log(cardInfo);
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
