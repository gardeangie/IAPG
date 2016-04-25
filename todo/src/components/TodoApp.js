/**
 * Created by student1 on 4/18/2016.
 */
/**
 * Created by albertoclarit on 4/18/16.
 */
import React from 'react';

export default  class TodoApp extends React.Component{


    constructor(props){
        super(props);
        this.state={
            mytodo:'',
            list:[
                'Vote Duriam',
                'Vote Ducay'
            ]
        };
        
    }

onChange(e){
    this.setState({
        mytodo:e.target.value
    })
}


onKeyUp(e){
     if( e.key==='Enter' )
     {
        let tmp =this.state.list;
        tmp.push(this.state.mytodo);
        this.setState({
        list:tmp,
        mytodo:''
    })
}
}

    render(){
        
        let items=[];
        for(var i=0;i<this.state.list.length;i++){
                items.push(<li key={i}>{this.state.list[i]}</li>);
        }
        return (
            <div>
            <font color="darkblue"><h1>My Todo List</h1>
            </font>
            <input type="type" onChange={this.onChange.bind(this)}
            value={this.state.mytodo}
             onKeyUp={this.onKeyUp.bind(this)}/>
            <ol>
            {items}
            </ol>
            </div>
    )
    }
}

