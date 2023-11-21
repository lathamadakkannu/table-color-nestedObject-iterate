import { Component } from "react";

class Message extends Component{
    constructor(){
        super()
            this.state={
                message:"Hi"
            }
    }

changeMessage(){
    this.setState({
        message:"I am Latha"
    })
}

secondMessage(){
    this.setState({
        message:"I am a Frontend Developer"
    })
}
    render(){
        return(
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={()=>this.changeMessage()}>Change</button>
                <button onClick={()=>this.secondMessage()}>Change</button>
            </div>
        )
    }
}
export default Message;