/**
 * Created by student1 on 4/18/2016.
 */
/**
 * Created by albertoclarit on 4/18/16.
 */
import React from 'react';
import TodoItem from './TodoItem';
//'./' - within the same folder '../outside' 

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

onChange=(e)=>{
    this.setState({
        mytodo:e.target.value
    })
};


onKeyUp=(e)=>{
     if( e.key==='Enter' )
     {
        let tmp =this.state.list;
        tmp.push(this.state.mytodo);
        this.setState({
        list:tmp,
        mytodo:''
    })
}
};

    deleteMe=(index)=>{
        var tmp=this.state.list;
        tmp.splice(index,1);
        this.setState({
            list:tmp
        });
    };
    
    render(){
        
        let items=[];
        for(var i=0;i<this.state.list.length;i++){
                items.push(<TodoItem key={i} 
                                      description={this.state.list[i]}
                                      index={i}
                                      removeMe={this.deleteMe}
                                      />);
        }
        
   
        return (
            <div className="todoapp">
            <font color="darkblue"><h1 className="header">My Todo List</h1>
            </font>
            <input type="type" onChange={this.onChange}
                   value={this.state.mytodo}
                   onKeyUp={this.onKeyUp}/>
        
            {items}
          
            </div>
        )  
    }
}

