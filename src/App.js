import React, {Component} from 'react';
import './App.css';

const Card = (props) => {
    return (
        <div className={"App"}>
            <header className={"App-header"}>
                <img className={"Image"} src={props.link}/>
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
            {props.cardData.map(mappedData => <Card {...mappedData}/>)}
        </div>
    )
};

class Form extends Component {
    getTheData = (event) => {
        event.preventDefault()
        console.log("Data  provided " + this.username.value)

    };

    render() {
        return (
            <div className={"App"}>
                <header className={"App-header"}>
                    <form onSubmit={this.getTheData}>
                        <label>Username</label>
                        <input
                            type={"text"}
                            ref={(input) => this.username = input}
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
        data: [
            {
                name: "Ashfaq",
                link: "https://avatars0.githubusercontent.com/u/20638539?v=4",
                company: "Ezerka"
            },
            {
                name: "Vamshi",
                link: "https://avatars3.githubusercontent.com/u/35305744?s=460&v=4",
                company: "Ezerka"
            },
            {
                name: "Vinay Reddy",
                link: "https://i.ibb.co/0nszQbN/8e-YSs7c-L-400x400.jpg",
                company: "Ezerka"
            }
        ]
    };

    render() {
        return (
            <div>
                <Form/>
                <CardList cardData={this.state.data}/>
            </div>

        );
    }
}

export default App
