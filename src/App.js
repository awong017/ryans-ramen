import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Context from './context';
import Home from './home';

const app = () => {
  const renderRoutes = () => {
    return (
      <>
        <Route exact path="/" component={Home} />
      </> 
    )
  }

  return (
    <div>
      {renderRoutes()}
    </div>
  )
}

export default withRouter(app);