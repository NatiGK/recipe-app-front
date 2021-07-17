import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <Nav /> */}
      <Router>
        <Switch>
          <Route path="/Auth">
            <h1>This is the auth page</h1>
          </Route>
          <Route path="/post">
            <h1>This is the post page</h1>
          </Route>
          <Route path="/recipe/:id">
            <h1>This is the recipe page</h1>
          </Route>
          <Route path="/">
            <h1>This is the home page</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
