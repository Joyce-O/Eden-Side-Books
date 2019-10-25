import React from 'react';
// import DigitalClock from "../src/DigitalClock";
import axios from 'axios';

class Index extends React.Component {
    // Add a static method to serialize the props for client side rendering
    static async getInitialProps() {
        // USING A REST CALL
        var promise = axios.get('http://localhost:4000/comments').then(response => {
            return {
                hasErrored: false,
                commmentData: response.data
            };
        })
        .catch(error => {
            return {
                hasErrored: true,
                message: error.message
            }
        });
        return promise;
    }
    //USING PROMISE SO THE CLASS CAN ACTUALLY CONTINUE RUNNING OTHER THINGS BEFORE getInitialProps resolves
    // ADD CONSTRUCTOR AND SET THE STATE
    constructor(props) {
        super(props);
        this.state = {
            hasErrored: props.hasErrored,
            message: props.message,
            commmentData: props.commmentData
        }
    }
    // FUNCTION THAT HANDLES UPDATE OF TIME EVERY  //setState too
    // tick() {
    //     this.setState(() => {
    //         return ({
    //             time: new Date().toLocaleString()
    //         });
    //     });
    // }
    // AFTER THAT CALL THE LIFECYCLE METHOD
    componentDidMount() {
        // this.interval = setInterval(() => this.tick(), 1000);
    }

    // Add this to avoid memory leak when this component is removed
    componentWillUnmount() {
        // clearInterval(this.interval);
    }

    // Call the render method
    render() {
        // CHANGING TO JSX SYNTAX
        // return <DigitalClock time={this.state.time}></DigitalClock>
        // return <h1>Hello from Joyceland: {this.state.time}</h1>
        return (
            <ul>
                {this.state.commmentData.map((comment) =>
                    <li key={comment.id}>{comment.body} {comment.postId}</li>
                    )}
            </ul>

        ) 
    }
};

export default Index;