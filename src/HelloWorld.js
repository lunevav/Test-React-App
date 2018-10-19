import React, { Component } from 'react';

class HelloWorld extends Component {
    render() {
        return (
            <div className="hello-world">
                <h1>{this.props.data}</h1>
            </div>
        );
    }
}

export default HelloWorld;

