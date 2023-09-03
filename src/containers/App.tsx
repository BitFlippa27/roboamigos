import React, { useState, useEffect, ChangeEvent } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import { getData } from "../utils/data";
import "../containers/App.css";

export type Robot = {
  id: string;
  name: string;
  email: string;
} 

function App() {

  const [searchField, setSearchField] = useState("");
  const [robots, setRobots] = useState<Robot[]>([]); 
  const [filteredRobots, setFilteredRobots] = useState(robots); //robots is inferred from Generic above
  
  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Robot[]>("https://jsonplaceholder.typicode.com/users");
      setRobots(users);
    }
    fetchUsers();
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
        <SearchBox searchChange={onSearchChange}  />
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