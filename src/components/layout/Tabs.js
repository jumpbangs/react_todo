import React, {Component} from "react";


// import Paper from '@material-ui/core/Paper';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';

let label = {};

let activeLabel = {
    borderColor: "red"
};

class Tabs extends Component{

    state = {
        activeIndex: this.props.defaultIndex || 0
    };

    render() {
        let { activeIndex } = this.state;

        let tabs = React.Children.map(this.props.children, (child, index )=>{
            let btnStyle = activeIndex === index ? activeLabel : label;

            return(
                <button
                    style={btnStyle}
                    className= 'tabButton'
                    onClick={() => {this.setState({activeIndex: index}); this.props.filterView(index)}}>
                    {child.props.label}
                </button>
            )
        });

        return(
            <div className='tabStyle'>
                <div className= 'tabStyle__tabs'>{tabs}</div>
                {this.props.children[this.state.activeIndex]}
            </div>
        )
    }
}

export default Tabs;