import React,{Component} from "react";
import "./TodoApp.css"

export class TodoApp extends Component{

    state={
        input:'',
        items:[],
        isOpen:false,
        editInput:'',
        editindex:null
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
    editItem=index=>{
            this.setState({
                isOpen:true,
                editInput:this.state.items[index],
                editindex:index
            })
    }
    handleEditChange=event=>{
        this.setState({
            editInput:event.target.value
        })
    }
    saveEditedItem=()=>{
        const {items,editInput,editindex}=this.state
        const updatedItems=[...items]
        updatedItems[editindex]=editInput
        this.setState({
            items:updatedItems,
            isOpen:false,
            editindex:null,
            editInput:''
        })
    }
    closePopup=()=>{
        this.setState({
            isOpen:false,
            editindex:null,
            editInput:''
        })
    }
    render(){
        const {input,items,isOpen,editInput}=this.state
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
                            {data}
                            <i class='fas fa-trash-alt' onClick={()=>this.deleteItem(index)}></i>
                            <i class="fa-solid fa-pen" onClick={()=>this.editItem(index)}></i>
                            {isOpen && (
                                <div className="popup-overlay">
                                    <div className="popup-content">
                                    <h2>Edit Item</h2>
                                    <input
                                        type="text"
                                        value={editInput}
                                        onChange={this.handleEditChange}
                                    />
                                    <button onClick={this.saveEditedItem}>Save</button>
                                    <button onClick={this.closePopup}>Cancel</button>
                                    </div>
                                </div>
                                )}


                        </li>
                    ))}
                </ul>                                
            </div>
        )
    }
}

export default TodoApp