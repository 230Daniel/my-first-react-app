import React from 'react';
import ReactDOM from 'react-dom';
import './theme.css';
import './index.css';
import Navbar from './components/navbar.js'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Page1 from "./page1.js";
import Page2 from "./page2.js";
import Bootstrap from "./pagebs.js";
import Page404 from "./page404.js";

ReactDOM.render(
  <BrowserRouter>
      <Navbar items={
        [
        ["Home", "/home"],
        ["House", "/house"],
        ["Bootstrap", "/bootstrap"]
        ]
        }/>
        <Switch>
          <Route exact path="/" component={Page1} />
          <Route exact path="/home/" component={Page1} />
          <Route exact path="/house/" component={Page2} />
          <Route exact path="/bootstrap/" component={Bootstrap} />
          <Route component={Page404}></Route>
        </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);
