import { Component } from "react"

class Count extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    countIncrement(){
        this.setState({
            count:this.state.count+1 
        })
    }
    countDecrement(){
        this.setState({
            count:this.state.count>0?this.state.count-1:0
        })
    }
    render(){
        return(
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={()=>this.countIncrement()}>Increment</button>
                <button onClick={()=>this.countDecrement()}>Decrement</button>
            </div>
        )
    }
}
export default Count;