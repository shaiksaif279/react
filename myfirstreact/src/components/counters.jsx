import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    state = 
    {
        counters : [
            {id :1,value :0,name : "counter"},
            {id :2,value :9,name : "counter"},
            {id :3,value :5,name : "counter"},
            {id :4,value :7,name : "counter"},
            {id :5,value :0 ,name : "counter"}
        ]
    };
    deleteButton = counterId =>{
        const counters =this.state.counters.filter(c => c.id !== counterId );
        this.setState({counters});
       
    };
    incremenButton=counter=>{
        const counters =[...this.state.counters]
        const index =counters.indexOf(counter);
        counters[index]=[...counter];
        counters[index].value+=1;
        this.setState({counter});
        
    }
    handleReset=()=>{
        const counters= this.state.counters.map(c=>{
            c.value = 0 
        return c;
    });
        this.state({counters})
    };
    render() { 
         
        return   <div>
            <button onClick="handleReset()" className="btn btn-primary btn-lg">reset</button>
             {this.state.counters.map(counter=><Counter key={Counter.id} onDelete={this.deleteButton} value={counter.value} name={counter.name} id={counter.id} >
                 <h1>{counter.name} - {counter.name}</h1>

                  </Counter>)} 
            
        </div>;
    }
}
 
export default Counters;