import React, {Component} from "react";

class TodoItem extends Component{

    getStyle= () =>{
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
        }
    };

    render() {
        const {id, title} = this.props.todo;
        return(
            <div style={this.getStyle()} className='itemList'>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
                    {title}
                    <button onClick={this.props.deleteItem.bind(this, id)} className='btnStyle'>X</button>
                </p>
            </div>
        )
    }
}

export default TodoItem;