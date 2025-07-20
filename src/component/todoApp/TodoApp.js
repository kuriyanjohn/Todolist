import React,{Component} from "react";
import "./TodoApp.css"

export class TodoApp extends Component{
    render(){
        return (
            <div className="todo-container">
               <h1>todo app </h1>     

               <form className="input-section">
                <input type="text" placeholder="enter items"/>
                </form>   
                <ul>
                    <li>item</li>
                    </ul>                                
            </div>
        )
    }
}

export default TodoApp