import { Component } from "react";

class Color extends Component{
    constructor(){
        super()
        this.state={
            make:"Yamaha",
            model:"R15",
            color:"Blue"
        }
    }
changeColor(){
    this.setState({
        color:"Green"
    })
}

render(){
    return(
        <div>
            <h2>{this.state.color}</h2>
            <button onClick={()=>this.changeColor()}>ColorChange</button>
        </div>
    )
}
}
export default Color;
   
