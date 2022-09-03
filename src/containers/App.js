import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import ErrorBoundry from "../components/ErrorBoundry";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchCange = (event) => {
    this.setState({
      searchfield: event.target.value,
    });
  };

  render() {
    const {robots, searchfield} = this.state;
    const filterdRobots = robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(searchfield.toLowerCase());
    });
    return !robots.length ?
         <h1 className="tc">Loading</h1>
  :
            <div className="tc">
              <h1 className="f2">RoboFriends</h1>
              <SearchBox searchChange={this.onSearchCange} />
              <ErrorBoundry>
                <CardList robots={filterdRobots} />
              </ErrorBoundry>
            </div>
  }
}

export default App;
