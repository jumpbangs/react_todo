import React, {Component} from "react";

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

export default SearchTodo;