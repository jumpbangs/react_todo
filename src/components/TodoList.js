import React, {Component} from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component{
    render() {
        console.log(this.props);
        return (
            this.props.todos.map((listItem) =>(
            // console.log(listItem)
            <TodoItem key={listItem.id} todo={listItem} markComplete={this.props.markComplete} deleteItem={this.props.deleteItem}/>
            ))
        );
    }
}

export default TodoList;