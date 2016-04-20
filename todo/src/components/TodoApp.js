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
            name:"Student"
        }
        
    }

onChange(e){
    this.setState({
        name:e.target.value
    })
}

    render(){

        return (
            <div>
            <font color="darkblue"><h1>Welcome to ReactJS {this.state.name}</h1>
            </font>
            <font color="red"><strong>Enter your name</strong><br/>
            </font>
            <form>
            <input type="text" onChange={this.onChange.bind(this)}/>
             </form>
            </div>
    )
    }
}