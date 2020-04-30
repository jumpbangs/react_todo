import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import "./assets/css/styles.css";

// Import from Components/Layouts
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Tabss from "./components/layout/Tabs";

// Import from Components
import SearchTodo from "./components/SearchTodo";
import TodoList from "./components/TodoList";
import TodoContent from "./data/Todos";
import AddTodoList from "./components/AddTodo";

// Material UI
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";
import List from "@material-ui/core/List";

// // Material UI Icons
// import HomeIcon from "@material-ui/icons/Home";
// import DoneIcon from "@material-ui/icons/Done";
// import ClearIcon from "@material-ui/icons/Clear";

const Taber = ({ children }) => <div>{children}</div>;

class App extends Component {
  state = {
    todos: TodoContent,
    searchedItems: TodoContent,
    filterViews: "all",
    searchKeyword: "",
    tabValue: 0,
  };

  // Search-Item Function
  searchItem = (ev) => {
    let word = ev.target.value;
    this.setState({
      searchKeyword: word,
      searchedItems: this.state.todos.filter((todoItem) => {
        return todoItem.title.toLowerCase().includes(word.toLowerCase());
      }),
    });
  };

  // Tabs View
  filterView = (value) => {
    let filter;
    if (value === 1) {
      filter = "completed";
    } else if (value === 2) {
      filter = "inCompleted";
    } else {
      filter = "all";
    }
    this.setState({
      filterViews: filter,
      tabValue: value,
    });
  };

  // Check mark for complete Item
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  //  Deleted marked Item
  deleteTodoItem = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
    this.setState({
      searchedItems: [
        ...this.state.searchedItems.filter((todo) => todo.id !== id),
      ],
    });
  };

  addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };

    if (title) {
      this.setState({ todos: [...this.state.todos, newTodo] });
      this.setState({ searchedItems: [...this.state.searchedItems, newTodo] });
    }
  };

  render() {
    let result;

    if (this.state.filterViews === "completed") {
      result = this.state.todos.filter((val) => val.completed === true);
    } else if (this.state.filterViews === "inCompleted") {
      result = this.state.todos.filter((val) => val.completed === false);
    } else {
      result = this.state.todos;
    }

    if (this.state.searchKeyword) {
      result = result.filter((todoItem) => {
        return todoItem.title
          .toLowerCase()
          .includes(this.state.searchKeyword.toLowerCase());
      });
    }

    console.log("latest", result);
    return (
      <div>
        <Header />
        <SearchTodo searchItem={this.searchItem} />

        <Tabss defaultIndex={0} filterView={this.filterView}>
          <Taber label="Home">
            <List className="listStyle">
              <AddTodoList addTodoItem={this.addTodoItem} />
              <TodoList
                label="all"
                todos={result}
                markComplete={this.markComplete}
                deleteItem={this.deleteTodoItem}
              />
            </List>
          </Taber>

          <Taber label="Completed">
            <List style={{ maxHeight: "100%", overflow: "auto" }}>
              <TodoList
                todos={result}
                markComplete={this.markComplete}
                deleteItem={this.deleteTodoItem}
              />
            </List>
          </Taber>

          <Taber label="InComplete">
            <List style={{ maxHeight: "100%", overflow: "auto" }}>
              <TodoList
                todos={result}
                markComplete={this.markComplete}
                deleteItem={this.deleteTodoItem}
              />
            </List>
          </Taber>
        </Tabss>

        <Footer />
      </div>
    );
  }
}

export default App;
