import React, { useState } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Context from './context';
import Home from './Components/home';
import About from './Components/about';
import Daikokuya from './CollectionImages/daikokuya.jpg';

const App = () => {

  const [collection, updateCollection] = useState([
    {
      id: "c1",
      name: "Daikokuya",
      location: "Little Tokyo",
      website: "https://www.daikoku-ten.com/",
      image: Daikokuya,
      description: "My favorite ramen spot. I go there almost every day",
      tips: "Best time to go is before 4pm on week days"
    }
  ])

  const renderRoutes = () => {
    return (
      <>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </> 
    )
  }

  const contextValue = {
    collection: collection
  };

  return (
    <Context.Provider value={contextValue}>
      <div className="app">
        {renderRoutes()}
      </div>
    </Context.Provider>
  )
}

export default withRouter(App);