import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component"
import ItemList from "./components/item-list.component";
import EditItem from "./components/edit-item.component";
import CreateItem from "./components/create-item.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/" exact component={ItemList} />
      <Route path="/edit/:id" component={EditItem} />
      <Route path="/create" component={CreateItem} />
      <Route path="/user" component={CreateUser} />
    </Router>
  );
}

export default App;
