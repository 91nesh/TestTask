import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { Home,Friends } from './Components/index'
import './App.css';
import 'semantic-ui-css/semantic.min.css'

const App = () => {
  return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path='/friends' component={Friends} />
        </div>
      </Router>
  );
}

export default App;
