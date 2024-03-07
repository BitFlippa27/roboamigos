import React, { useState, useEffect, ChangeEvent } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import { getData } from "../utils/data.utils";

import "../containers/App.css";

export type Robots = {
  id: string;
  name: string;
  email: string;
}


function App() {
  const [searchField, setSearchField] = useState("");
  const [robots, setRobots] = useState<Robots[]>([]);
  const [filteredRobots, setFilteredRobots] = useState(robots);
  
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

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
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