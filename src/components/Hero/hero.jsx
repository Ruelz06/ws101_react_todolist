import { Component} from "react"

class Hero extends Component {
    render() {
        return <h3>Message: {this.props.messsage}</h3>
    }
}

export default Hero;