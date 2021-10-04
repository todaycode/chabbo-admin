import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import CssBaseline       from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";

import theme    from "assets/theme/theme.js";

import "assets/plugins/nucleo/css/nucleo.css";
import "assets/scss/argon-dashboard-react.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Redux
import { LOGOUT }   from 'actions/types';
import { Provider } from 'react-redux';
import {store }       from 'store';
import { loadUser } from 'actions/auth';
import setAuthToken from 'utils/setAuthToken';
import AdminLayout from "layouts/Admin.js";
import Register from 'views/auth/Register';
import Login from "views/auth/Login.js";
import Profiles from 'components/profiles/Profiles';
import Profile from 'components/profile/Profile';
import './App.css';
import 'rsuite-table/lib/less/index.less'; 
import 'rsuite/dist/rsuite.min.css'

import test from 'views/admin/Dashboard'
const App = () => {
  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      // setAuthToken(localStorage.token);
      store.dispatch(loadUser());
    }
    

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Fragment>
            <Switch>
              <Route exact path="/test" component={test} />
              <Route exact path="/profiles" component={Profiles} />
              <Route exact path="/profile/:id" component={Profile} />
              <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Redirect from="/" to="/login" />
            </Switch>
          </Fragment>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
