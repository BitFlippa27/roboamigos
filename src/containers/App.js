import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "../containers/App.css";


function App() {

  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredRobots, setFilteredRobots] = useState(robots);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => setRobots(users));
  },[]); 
    
  useEffect(() => {
    const searchResult = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    });

    setFilteredRobots(searchResult);
  }, [robots, searchField])

  const onSearchChange = event => {
    setSearchField(event.target.value);
  }

  
    return !robots.length ? <h1>Loading</h1> :
    (
      <div className="tc">
        <h1 className="f1">RoboAmigos</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots}/>
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  
}

export default App;