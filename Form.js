import React from "react";

class Form extends React.Component{
 
    constructor(){
        super();
        this.state={
            Name:"ENTER TEXT: ",Email:"abc@gmail.com: " 

        };


    }
     Changename=()=>{
        this.setState({Name:document.getElementById("na").value})


     }
     Changemail=()=>{ this.setState({Email:document.getElementById("mail").value})}
       

     render(){
        return(
            <>
            <h2>Enter the Name</h2>
            <input type="text" id="na"></input>
            <button onClick={this.Changename}>CHANGE YOUR NAME</button>


            <h2>Enter the MAIL</h2>
            <input type="text" id="mail"></input>
            <button onClick={this.Changemail}>CHNAGE YOUR MAIL</button>

            <h1>{this.state.Name}</h1>
            <h1>{this.state.Email}</h1>
            </>
        );
     }
}
export default Form;