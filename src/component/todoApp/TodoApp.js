import React,{Component} from "react";
import "./TodoApp.css"

export class TodoApp extends Component{

    state={
        input:'',
        items:[]
    }
    handleChange=event=>{
         this.setState({
            input:event.target.value
         })         
    }

    storeItems=event=>{
        event.preventDefault()
        const {input}=this.state
        

        this.setState({
            items:[...this.state.items,input],
            input:''
        })
    }
    deleteItem=key=>{
        const allItems=this.state.items
        
        allItems.splice(key,1)
        this.setState({
            items:allItems
        })
    }
    render(){
        const {input,items}=this.state
        console.log(items);
        
        return (
            <div className="todo-container">
                <form className="input-section" onSubmit={this.storeItems}>
               <h1>todo app </h1>     
               
                <input type="text" value={input} onChange={this.handleChange} placeholder="enter items"/>
                </form>   
                <ul>
                    {items.map((data,index)=>(
                        <li key={index}>
                            {data}<i class='fas fa-trash-alt' onClick={()=>this.deleteItem(index)}></i>
                        </li>
                    ))}
                </ul>                                
            </div>
        )
    }
}

export default TodoApp