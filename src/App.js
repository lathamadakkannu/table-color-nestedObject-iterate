
import './App.css';
/*import Table from './Table';
import Practice from './Practice';
import Message from './Messagechange';
import Count from './Countchange';
import Color from './Colorchange';*/
import Iteration from './Iteration';
import React,{useState} from "react"

function App() {
  const employee=[

    {
    name:"Alex",
    skills:[
    {name:"ReactJS", type:"Frontend"},
    {name:"nodeJS", type:"Backend"}
    ]
    
    },
    {
    name:"Anna",
    skills:[
    {name:"Angular", type:"Frontend"},
    {name:"Python", type:"Backend"}
    ]
    
    }
    ]

    const [color,setColor]=useState("Black")
    const change=()=>{
      setColor("Blue")
    }
    return(
      <div className="App">
        <h3>color: {color}</h3>
          <button className='btn' onClick={change}>Click</button>
        <Iteration store={employee}/>
      </div>
    )
}
  
/*function Call(){
  const userDetails=[
    {
      id:1,
      name:"John",
      age:34,
      profession:"coder"
    },
    {
      id:2,
      name:"Max",
      age:31,
      profession:"designer"
    },
    {
      id:3,
      name:"Mary",
      age:25,
      profession:"coder"
    },
    {
      id:4,
      name:"Alex",
      age:29,
      profession:"designer"
    }
  ]
  return (
    <div className="App">
      <Table userData={userDetails}/>

        <Practice>
          <p>Hi i am childen</p>
        </Practice>

        <Count />
        <Message />
        <Color />

    </div>
  );
  
  }
  export default Call;*/

export default App;

