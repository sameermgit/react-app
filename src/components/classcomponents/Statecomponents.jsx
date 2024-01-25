import React from "react";
class Statecomponents extends React.Component{
    constructor(){
        super()
        this.state={
            name:"kec",
        }

    }
    changestate=()=>{
        console.log("Kongu Engineering College")
    }
    render(){
        return (
            <div>
                <h1>This is state components</h1>
                <h2>Hello, {this.state.name}<br></br></h2>
                <h3>Im changing the state of the {this.state.name} to{this.changestate()}</h3>
                            
            </div>
        )
    }
}
export default Statecomponents;
