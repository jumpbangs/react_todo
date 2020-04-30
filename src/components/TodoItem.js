import React, { Component } from "react";

import PropTypes from "prop-types";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import CancelIcon from '@material-ui/icons/Cancel';

class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  render() {
    const { id, title, completed } = this.props.todo;

    return (
      <ListItem key={id} role={undefined} dense button>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={completed}
            onChange={this.props.markComplete.bind(this, id)}
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText
          id={id}
          primary={title}
          style={this.getStyle()}
          className="itemList"
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="cancel" onClick={this.props.deleteItem.bind(this, id)} color="secondary">
            <CancelIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

TodoItem.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

export default TodoItem;
