import React, {Children, Component} from 'react';
import './styles/App.css';

//Import from Components
import TodoList from "./components/TodoList";
import Header from "./components/layout/Header";
import AddTodoList from "./components/AddTodo";
import SearchTodo from "./components/SearchTodo";
import Tabs from "./components/layout/Tabs";

import TodoContent from "./data/Todos";
import uuid from 'uuid';


const Tab = ({children}) => <div>{children}</div>;

class App extends Component{

    state = {
        todos: TodoContent,
        searchedItems : TodoContent,
        filterViews :'all',
        searchKeyword:''
    };


    markComplete = (id) => {
        this.setState({
            todos:this.state.todos.map(todo=>{
                if(todo.id === id){
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        })
    };

    addTodoItem = (title) => {
        const newTodo = {
            id: uuid.v4(),
            title,
            completed: false,
        };

        if(title){
            this.setState({todos:[...this.state.todos, newTodo]})
            this.setState({searchedItems:[...this.state.searchedItems, newTodo]})
        }
    };

    deleteTodoItem = (id) =>{
        this.setState({todos:[...this.state.todos.filter(todo => todo.id !== id)]});
        this.setState({searchedItems:[...this.state.searchedItems.filter(todo => todo.id !== id)]});
    }

    searchItem = (ev) => {
        let word = ev.target.value;
        this.setState({
            searchKeyword: word,
            searchedItems:this.state.todos.filter((todoItem) =>{

                return todoItem.title.toLowerCase().includes(word.toLowerCase());
            })
        })
    };

    filterView = (value) => {
        let filter;
        if (value === 1){
            filter = 'incompleted'
        }
        else if(value === 2){
            filter = 'completed'
        }
        else {
            filter = 'all'
        }
        this.setState({
            filterViews: filter
        })
    }

    render() {
        let result;

        if(this.state.filterViews === 'completed'){
            result = this.state.todos.filter(val=>val.completed === true);
        }
        else if( this.state.filterViews === 'incompleted'){
            result = this.state.todos.filter(val=>val.completed === false);
        }
        else{
            result = this.state.todos;
        }

        if (this.state.searchKeyword){
            result = result.filter((todoItem) =>{
                return todoItem.title.toLowerCase().includes(this.state.searchKeyword.toLowerCase());
            });
        }


        console.log(result);


        return(

            <div className='App Container'>
                <Header/>
                <SearchTodo searchItem={this.searchItem}/>
                <Tabs defaultIndex={0} filterView={this.filterView}>
                    <Tab label="Home">
                        <AddTodoList addTodoItem={this.addTodoItem}/>
                        <TodoList
                            todos={result}
                            markComplete={this.markComplete}
                            deleteItem = {this.deleteTodoItem}
                        />
                    </Tab>

                    <Tab label="Completed">
                        <TodoList
                            todos={result}
                            markComplete={this.markComplete}
                            deleteItem = {this.deleteTodoItem}
                        />
                    </Tab>

                    <Tab label="InComplete">
                        <TodoList
                            todos={result}
                            markComplete={this.markComplete}
                            deleteItem = {this.deleteTodoItem}
                        />
                    </Tab>

                </Tabs>
            </div>

        )
    }


}

export default App;