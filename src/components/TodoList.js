import React, { Component } from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

class TodoList extends Component {

  render() {
    return this.props.todos.map((listItem) => (
      <TodoItem
        key={listItem.id}
        todo={listItem}
        markComplete={this.props.markComplete}
        deleteItem={this.props.deleteItem}
      />
    ));
  }
}

TodoList.propTypes = {
  markComplete: PropTypes.func,
  deleteItem: PropTypes.func,
};

export default TodoList;
