import React, { Component } from "react";
import PropTypes from "prop-types";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import SearchIcon from "@material-ui/icons/Search";

class SearchTodo extends Component {
  render() {
    return (
      <div className="searchbarStyle">
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-search">Search</InputLabel>
          <OutlinedInput
            id="outlined-adornment-search"
            labelWidth={60}
            type="text"
            onChange={this.props.searchItem}
            startAdornment={
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
    );
  }
}

SearchTodo.propTypes = {
  searchedItem: PropTypes.array,
};

export default SearchTodo;
