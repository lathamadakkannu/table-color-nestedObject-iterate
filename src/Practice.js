 import {Component}from "react"
 
 class Practice extends Component{
    render(){
        return(
            <div>
                {this.props.children}
                <h1>Hello</h1>
                <h2>Welcome</h2>
            </div>
        )
    }
 }
 export default Practice;