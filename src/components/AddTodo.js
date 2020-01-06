import React, {Component} from "react";

import PropTypes from 'prop-types';

class AddTodoList extends Component{
    state = {
        title:''
    };

    onChange = (ev) => this.setState(
        {
            [ev.target.name]: ev.target.value
        }
    );


    onSubmit = (ev) =>{
        ev.preventDefault();
        this.props.addTodoItem(this.state.title);
        this.setState({ title: ''})
    }

    render() {
        return(
            <form onSubmit={this.onSubmit}  className='formStyle'>
                <input
                    type="text"
                    name="title"
                    placeholder='Add Todo ....'
                    className='inputStyle'
                    value={this.state.title}
                    onChange={this.onChange}
                />

                <input type="submit" value="Submit" style={btnSubmit} className="btn"/>
            </form>
        )
    }
}

const btnSubmit = {
    flex : '1'
};

AddTodoList.propTypes ={
    value : PropTypes.string
}

export default AddTodoList;