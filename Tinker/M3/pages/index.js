import React from 'react';
import DigitalClock from "../src/DigitalClock";

class Index extends React.Component {
    // Add a static method to serialize the props for client side rendering
    static async getInitialProps() {
        return ({
            time: new Date().toLocaleString()
        });
    }
    // ADD CONSTRUCTOR AND SET THE STATE
    constructor(props) {
        super(props);
        this.state = {
            time: props.time
        }
    }
    // FUNCTION THAT HANDLES UPDATE OF TIME EVERY  //setState too
    tick() {
        this.setState(() => {
            return ({
                time: new Date().toLocaleString()
            });
        });
    }
    // AFTER THAT CALL THE LIFECYCLE METHOD
    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    // Add this to avoid memory leak when this component is removed
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    // Call the render method
    render() {
        // CHANGING TO JSX SYNTAX
        return <DigitalClock time={this.state.time}></DigitalClock>
        // return <h1>Hello from Joyceland: {this.state.time}</h1>
    }
};

export default Index;