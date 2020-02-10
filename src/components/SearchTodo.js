import React, {Component} from "react";
import PropTypes from 'prop-types';

class SearchTodo extends Component{
    render() {
        return(
            <div className='searchBarStyle'>
                <input
                    type="text"
                    placeholder='Search ....'
                    className='searchStyle'
                    onChange={this.props.searchItem}
                />
            </div>

        )
    }
}

SearchTodo.propTypes = {
  searchedItem: PropTypes.array
};

export default SearchTodo;