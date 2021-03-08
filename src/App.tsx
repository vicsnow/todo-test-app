import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Todo, TodoList } from './pages'
import './App.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/todo/:id?">
          <Todo />
        </Route>
        <Route path="/">
          <TodoList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
