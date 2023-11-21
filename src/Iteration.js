import {Component} from "react"

class Iteration extends Component{
    render(){
        const {store}=this.props
        const iterateData=store.map((e,i)=>{
            return(
                <ul key={i}>
                    <li>Name: {e.name}</li>
                    <li>Skill: {e.skills[0].name}, Type: {e.skills[0].type}</li>
                    <li>Skill: {e.skills[1].name}, Type: {e.skills[1].type}</li>
                </ul>
            )
        })

        return(
            <div>
                {iterateData}
            </div>
        )
    }
}
export default Iteration;