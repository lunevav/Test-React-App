import React from "react";


class ExampleComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            MYthisProps: "",
            MYnextProps: "",
            active: false
        }
    }


    componentWillReceiveProps(nextProps) {

        if (nextProps.value === "kate") {
            this.setState({
                active: true
            });
        } else {
            this.setState({
                active: false
            });
        }

        this.setState({
            MYthisProps: this.props.value,
            MYnextProps: nextProps.value
        })
    }


    render() {
        const { MYthisProps, MYnextProps, active} = this.state;
        return (
            <div>
                <div>{active ? "Hello Kate" : "Error...."}</div>
                <h1
                    className={MYthisProps === "amber" ? "red" : "green"}
                >
                    this.props: {MYthisProps}
                    </h1>
                <h1
                    className={MYnextProps === "amber" ? "red" : "green"}>
                    nextProps: {MYnextProps}
                    </h1>
            </div>
        )
    }
}

export default ExampleComponent;