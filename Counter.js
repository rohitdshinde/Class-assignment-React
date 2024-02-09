import React from "react";

class Counter extends React.Component{
    constructor(){
        super();
        this.state={
            count:0
        };


    }
     increment=()=>{
        this.setState({count: this.state.count+1});

     };
    render(){
        return(
           <>
           <p>Count :{this.state.count}</p>
           <button onClick={this.increment}>CLICK ME</button>
           </>
        );
    }
}
export default Counter;

