import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Context from './context';
import Styled from 'styled-components';
import Home from './home';

const App = Styled.div`
`

const app = () => {
  const renderRoutes = () => {
    return (
      <>
        <Route exact path="/" component={Home} />
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