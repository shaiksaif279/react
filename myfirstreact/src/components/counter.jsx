import React, { Component } from 'react';
class Counter extends Component {
    state = { 
        value:this.props.value
         
     }
    incrementButton=()=>{
        this.setState({value : this.state.value+1 })
    }
    decrementButton=()=>{
        this.setState({value : this.state.value-1})
    }
    render() { 
        return (<div className="  ">
            <div className=" "> 
            <div className=" "> 
            <h1>{this.props.name}- {this.props.id}</h1></div>
            <span className={this.badgeClasses()}>{ this.formatCounter()}</span>
            <button onClick={this.incrementButton} id="button" className="btn btn-primary btn-sm m-2">increment</button>
            {/* <button onClick={this.decrementButton} className="btn btn-primary btn-sm m-2">decrement</button> */}
            <div>
                <button onClick= {()=>this.props.onDelete(this.props.id)} className="btn btn-warning btn-sm">Delete</button>
            </div>
            </div>

        </div>);
    }
    badgeClasses(){
        let classes = "badge m-2 badge-";
        if(this.state.value===0){
            classes+=  "warning";
        }
        else if(this.state.value<=-1){
            classes+="danger";

        }
        else{
            classes+="primary";
        }
          

         return classes
    }
    formatCounter() {
        return this.state.value===0 ? "zero" :this.state.value; 
    }
}
 
 
export default Counter;