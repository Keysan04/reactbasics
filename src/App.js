import { useState } from "react";
import "./App.css";
import { List } from "./List";
import { Form } from "./Form";

const App = () => {
  const [userArg, setUserArg] = useState(["prem", "Nick", "Shree"]);

  const addUser = (user) => {
    setUserArg([...userArg, user]);
  };

  return (
    <div>
      <Form addUser={addUser} />
      <List userArg={userArg} />
    </div>
  );
};

export default App;
