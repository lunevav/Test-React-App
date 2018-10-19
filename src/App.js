import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";

// @REMOTES
import HelloWorld from './HelloWorld';

//ACTIONS
import { updateValue, getUsers } from './actions/actions';
import getUsersReducer from "./reducers/getUsersReducer";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sliceValue: 5
        }
    }

    test = () =>  {
      this.props.updateValue("hello world");
    }

    MY_TEST_GET = () =>  {
        this.props.getUsers();
        getUsers()
    }

    loadMore = () => {
        const data = this.state.sliceValue;
    }


  render() {
    const { pending, success, rejected, response, error } = this.props.users;
    const users = success && response ? response
        .slice(0, 5)
        .map(item => (
            <div key={item.id}>
                {item.title}
            </div>
        )
    ) : <div>NO USERS</div>
    return (
      <div className="App">
          {users}
          <h1>{this.props.caclValue.value}</h1>
          <button onClick={this.test}>CLICK</button>
          <button onClick={this.MY_TEST_GET}>GET USERS</button>
          <h1>{pending ? "LOADING...." : ""}</h1>
          <h1>{rejected ? "ERROR" : ""}</h1>
          <h1>{success ? "YEEEE" : ""}</h1>
          <h1>{rejected ? error.stack : ""}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        caclValue: state.calcReducer,
        users: state.getUsersReducer
    };
};

const mapDispatchToProps = dispatch => ({
    updateValue: (value) => dispatch(updateValue(value)),
    getUsers: () => dispatch(getUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

