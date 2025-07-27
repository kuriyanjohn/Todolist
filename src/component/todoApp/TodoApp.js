import React,{Component} from "react";
import "./TodoApp.css"

export class TodoApp extends Component{
    render(){
        return (
            <div className="todo-container">
                <form className="input-section">
               <h1>todo app </h1>     

               
                <input type="text" placeholder="enter items"/>
                </form>   
                <ul>
                    <li>item <i class='fas fa-trash-alt'></i>
                    </li>
                    <li>item <i class='fas fa-trash-alt'></i>
                    </li>
                    <li>item <i class='fas fa-trash-alt'></i>
                    </li>
                    </ul>                                
            </div>
        )
    }
}

export default TodoApp