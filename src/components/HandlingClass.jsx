import { Component } from "react";

class HandlingClass extends Component {
    
    handleClass() {
        console.log("I am the class!")
    }

    render() {
        return (
            <>
            <h1>This is how to handle events in Functional Componements</h1>
            <button onClick={this.handleClass}>Click Me!</button>
            </>
        )
    }
}

export default HandlingClass;