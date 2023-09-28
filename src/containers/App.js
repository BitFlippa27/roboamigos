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
  /*
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => 
      response.json())
    .then(users => {
      console.log(users)
      setRobots(users)
    });
  },[]); 
  */
  
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const robots = await response.json();
      setRobots(robots);
    }
    
    try {
      fetchUsers();
    } catch (err) {
      console.error(err);
    }
  }, []); //fetch only once at mount
    
  useEffect(() => {
    const searchResult = robots.filter(robot => 
      robot.name.toLowerCase().includes(searchField.toLowerCase()));

    setFilteredRobots(searchResult);
  }, [robots, searchField])

  const onSearchChange = event => {
    setSearchField(event.target.value);
  }
  
    return !robots.length ? <h1>Loading</h1> :
    (
      <div className="tc">
        <h1 className="f1">Roboamigos</h1>
        <SearchBox searchChange={onSearchChange} />
        <br /> 
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots}/>
          </ErrorBoundry>
        </Scroll>
      </div>
    );
}

export default App;