import './App.css';
import React from 'react';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import AboutPage from './pages/AboutPage';
import RecipePage from './pages/RecipePage';
import NavBar from './Components/NavBar/NavBar';

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/auth">
            <AuthPage />
          </Route>
          <Route path="/post">
            <PostPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/recipe/:id">
            <RecipePage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
