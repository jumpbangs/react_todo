import React, { Component } from "react";

import PropTypes from "prop-types";

import {
  FormControl,
  IconButton,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";

import PostAddIcon from "@material-ui/icons/PostAdd";

class AddTodoList extends Component {
  state = {
    title: "",
  };

  onChange = (ev) =>
    this.setState({
      [ev.target.name]: ev.target.value,
    });

  onSubmit = (ev) => {
    ev.preventDefault();
    this.props.addTodoItem(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="formStyle">
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Add new todo</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            name="title"
            value={this.state.title}
            onChange={this.onChange}
            endAdornment={
              <IconButton
                aria-label="directions"
                type="submit"
                value="Submit"
              >
                <PostAddIcon />
              </IconButton>
            }
            labelWidth={100}
          />
        </FormControl>
      </form>
    );
  }
}

// const btnSubmit = {
//   flex: "1",
// };

AddTodoList.propTypes = {
  value: PropTypes.string,
};

export default AddTodoList;
