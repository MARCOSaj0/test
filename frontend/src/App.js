import React from "react";
import {Routes, Route} from 'react-router-dom';
import User from "./component/createUser/User";
import List from "./component/getList/List";

const App = () => {
  return (
    <Routes>
      <Route excat path="/" element={<List />}></Route>
      <Route excat path="/create" element={<User />}></Route>
    </Routes>
  );
}

export default App;