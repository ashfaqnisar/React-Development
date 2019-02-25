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

let data = [
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
];

const CardList = (props) => {
    return (
        <div>
            {props.cardData.map(mappedData => <Card {...mappedData}/>)}
        </div>
    )
};
class App extends Component {

    render() {
        return (
            <div>
                <CardList cardData={data}/>
            </div>

        );
    }
}

export default App
