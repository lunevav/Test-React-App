import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';


// @REMOTE COMPONENTS
import UIElement from './UIElement/UIElement';
import ExampleComponent from './UIElement/ExampleComponent';

const users = [
    {
        name: "Jake",
        date: new Date()
    },
    {
        name: "Kate",
        date: new Date()
    },
    {
        name: "Yalla",
        date: new Date()
    },
    {
        name: "Beseder",
        date: new Date()
    }
];

for (let i = 0; i < 2; i++) {
    users.push({
        name: `sasha${i}`,
        date: new Date()
    })
}

class App extends Component {
    constructor() {
        super();

        this.state = {
            clickedItem: "no user selected",
            searchValue: "",
            currentStyle: "item",
            activeItemName: ""
        }
    }

    getValueFromItem = (userData) => {
        console.log(userData);
        this.setState({
            clickedItem: userData
        });
    }

    changeColor = (data) => {
        console.log(data);
        this.setState({
            currentStyle: "itemRED",
            activeItemName: data

        })
    }

    search = (e) => {
        const { value } = e.target;
        this.setState({
            searchValue: value.toLowerCase()
        })
    }


  render() {
    console.log("[App][Render]");
    const myUsers = users ? users
        .filter(obj => obj.name
            .toLowerCase()
            .indexOf(this.state.searchValue) > -1)
        .map((user, key ) => {
        return(
            <UIElement
                userName={user.name}
                searchValue={this.state.searchValue}
                changeColor={() => this.changeColor(user.name)}
                activeItemName={this.state.activeItemName}
                key={key}
                UIElementStyle={this.state.currentStyle}
                value={user.name}
            />
        )
    }) : "No users";
    return (
      <div className="App">
          <iframe
              src="www.google.com" width="468" height="60" align="left">
              Ваш браузер не поддерживает плавающие фреймы!
          </iframe>

          <div>
              <ExampleComponent
                  value={this.state.searchValue}
              />
          </div>
          <div>
              <input
                  type="text"
                  placeholder="Search"
                  onChange={this.search}
              />
          </div>
          <div>
              {myUsers}
              <div>{this.state.clickedItem}</div>

          </div>
      </div>
    );
  }
}

export default App;

// GOOGLE CHROME V GOOGLE CHROME
