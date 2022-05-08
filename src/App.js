import React, { useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { ReactNotifications, Store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useRef } from "react";

import { ThemeContext } from './contexts/ThemeContext';
import { Main, BlogPage, ProjectPage } from './pages'
import { BackToTop } from './components'
import Mailer from './components/mailer'
import ScrollToTop from './utils/ScrollToTop'

import './App.css'


const SnackbarType = {
  success: "success",
  fail: "fail",
};


function App() {

  const { theme } = useContext(ThemeContext);

  console.log("%cMY PORTFOLIO", `color:${theme.primary}; font-size:50px`);
  console.log("%chttps://github.com/Virsail/landingajob.git", `color:${theme.tertiary}; font-size:20px`);
  

  const snackbarRef = useRef(null);

  

  return (
    <div className="app">
      <Router>
        <ScrollToTop/>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/blog" exact component={BlogPage} />
          <Route path="/projects" exact component={ProjectPage} />

          <Redirect to="/" />
        </Switch>
      </Router>
      <BackToTop />
      <ReactNotifications/>

      
     
      <div className='App'>
      </div>
    </div>
  );
}

export default App;
