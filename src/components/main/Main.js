import React from 'react';
import axios from 'axios';
import "./Main.css";

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            requestedData: [],
        };
    }
    componentDidMount() {
        const server = axios.get('https://api.nasa.gov/planetary/apod?api_key=a5M68MY3DAZWMqQPfnhF78ziJrzoO79jaLpFzOnE');


        const dataRequesting = () => {
            server
                .then((response)=>{
                    console.log(response.data);
                    this.setState({
                        requestedData: response.data,
                    });
                
                })
                .catch((error)=>{
                    console.log(error);
                })
        };
        console.log(dataRequesting())
    }

    render(){
        return (
            <div className="Main">
            <h1>{this.state.requestedData.title}</h1>
            <img src={this.state.requestedData.hdurl} alt="Pictures from Nasa" width="500px" height="500px"></img>
            <p>{this.state.requestedData.explanation}</p>
            </div>
        )
    }
}

export default Main; 