import React from "react";


class  SearchBar extends React.Component {
    startprogress=()=>{
        var progressbar=document.getElementById("Increase");
        var cw=parseFloat(progressbar.style.width)||0;
        var newwidth=cw+10;
        if(newwidth>=100)
        newwidth=100;
    progressbar.style.width = newwidth + "%" ;
    };
    stopProgress=()=>{
        var progressbar=document.getElementById("Increase");
        var cw=parseFloat(progressbar.style.width)||0;
        var newwidth=cw-10;
        if(newwidth<=0)
        newwidth=0;
    progressbar.style.width = newwidth + "%" ;
   
    };
    render(){
        return(
            <>
            <div className="progessbar" id="progess">
                <div className="II" id="Increase"></div>
            </div>
            <button onClick={this.startprogress} className="btn btn-primary mx-1">INCREASE BAR</button>
            <button onClick={this.stopProgress}className="btn btn-primary mx-1">DECREASE BAR</button>
            </>
        )
    }
    
}
export default SearchBar;