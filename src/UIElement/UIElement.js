import React from "react";
import PropTypes from "prop-types";

class UIElement extends React.Component {
    constructor() {
        super();
    }

    shouldComponentUpdate(nextProps) {
        if (this.props.userName === nextProps.activeItemName) {
            console.log(this.props.userName);
            console.log(this.props.activeItemName);
            return true;
        }

        if (this.props.userName === this.props.activeItemName) {
            console.log(this.props.userName);
            console.log(this.props.activeItemName);
            return true;
        }

        return false;
    }
    render() {
        console.log("[UIElement][Render]")
        return (
            <div
                onClick={this.props.changeColor}
                className={this.props.userName === this.props.activeItemName ? "itemRed" : "item"}
            >
                {this.props.value}
            </div>
        )
    }

}

UIElement.propTypes = {
    value: PropTypes.string,
    UIElementStyle: PropTypes.string,
    getValueFromItem: PropTypes.func

}

export default UIElement;