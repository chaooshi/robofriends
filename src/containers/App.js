import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import ErrorBoundry from "../components/ErrorBoundry";

import { setSearchField } from '../actions'

const mapStateToProps = state => {
  return {
    searchField: state .searchField
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchCange: (event) => dispatch(setSearchField(event.target.value))
  }
}
 
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }


  render() {
    const {robots} = this.state;
    const { searchField, onSearchCange } = this.props;
    const filterdRobots = robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(searchField.toLowerCase());
    });
    return !robots.length ?
         <h1 className="tc">Loading</h1>
  :
            <div className="tc">
              <h1 className="f2">RoboFriends</h1>
              <SearchBox searchChange={onSearchCange} />
              <ErrorBoundry>
                <CardList robots={filterdRobots} />
              </ErrorBoundry>
            </div>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
