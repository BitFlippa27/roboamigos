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
      const users = await getData<Robots[]>("https://jsonplaceholder.typicode.com/users");
      setRobots(users);
    }

    fetchUsers();
  },[]); 
    
  useEffect(() => {
    const searchResult = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    });

    setFilteredRobots(searchResult);
  }, [robots, searchField])

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
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