import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Context from './context';
import Home from './Components/home';
import About from './Components/aboutMe';

const app = () => {
  const renderRoutes = () => {
    return (
      <>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </> 
    )
  }

  const value = {};

  return (
    <Context.Provider value={value}>
      <div className="app">
        {renderRoutes()}
      </div>
    </Context.Provider>
  )
}

export default withRouter(app);