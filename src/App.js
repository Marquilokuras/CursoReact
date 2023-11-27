import './App.css';
import React from 'react';
import SideBar from './components/SideBar';
import ContentWrapper from './components/ContentWrapper';
import Error from './components/Error';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <SideBar />
        <Switch>
          <Route exact path="/" component={ContentWrapper} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;