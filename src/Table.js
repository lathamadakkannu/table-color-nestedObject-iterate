import { Component } from "react";

class Table extends Component{
    render(){
        const {userData}=this.props
        const storeData= userData.map((e,i)=>{
        return(
            <tr key={i}>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.age}</td>
            <td>{e.profession}</td>
        </tr>
        )
    })

return(
    <table>
        <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Profession</th>
        </thead>

        <tbody>
            {storeData}
        </tbody>

    </table>
)
    }
}
/*const Table=(props)=>{

    const {userData}=props
 const storeData= userData.map((e)=>{
        return(
            <tr>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td>{e.profession}</td>
                
            </tr>
        )
    })
    return(

        <table>
            <thead>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Profession</th>
            </thead>

            <tbody>
                {storeData}
            </tbody>

        </table>
    )
}*/
export default Table;