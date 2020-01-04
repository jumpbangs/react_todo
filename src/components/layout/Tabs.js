import React, {Component} from "react";


let label = {
    font: "inherit",
    padding: "5px 10px",
    display: "inline-block",
    border: "none",
    borderBottom: "solid 2px #ccc",
    marginRight: "10px",
    cursor: "pointer"
};

let activeLabel = {
    ...label,
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
                    onClick={() => {this.setState({activeIndex: index}); this.props.filterView(index)}}>
                    {child.props.label}
                </button>
            )
        });

        return(
            <div>
                <div>{tabs}</div>
                {this.props.children[this.state.activeIndex]}
            </div>
        )
    }
}

export default Tabs;