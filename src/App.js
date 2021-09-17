import React from 'react';
import Home from "./Home";
import { Switch, Route } from 'react-router';

const App=()=>{
  return(
      <>
      
      <Switch>
      <Route exact path="/" component={Home}/>   
      </Switch>
      
      </>
  );
};
export default App;
