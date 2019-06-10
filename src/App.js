import React, { Component } from '../node_modules/react';
import { BrowserRouter as Router, Route, Switch } from '../node_modules/react-router-dom';
import { ThemeProvider } from '../node_modules/styled-components/dist/styled-components.cjs';

import { ContextProvider } from './globalState/state';
import { AuthContext, AlertContext, AuxDataContext } from './globalState';
import Login from './components/login/Login';
import Menu from './components/menu/Menu';
import Home from './components/home/Home';
import Events from './components/events/Events';
import NotFound from './components/notFound/NotFound';
import Alert from './components/alert/Alert';
import Incomings from './components/incomings/Incomings';
import Admin from './components/admin/Admin';

const theme = {
  principal: '#aa0d0f',
  secondary: 'white',
  text: '#999',
  textEditor: 'black',
  border: '#ddd',
  rowAdded: '#ccffcc',
  rowEdited: '#ffffcc',
  rowDeleted: '#ffcccc',
  errorColor: 'rgb(242, 154, 152)'
};

class App extends Component {
  render() {
    return (
      <ContextProvider>
        <ThemeProvider theme={theme}>
          <AuthContext.Consumer>
            {authContext => (
              <React.Fragment>
                {authContext.isAuthenticated() ? (
                  <React.Fragment>
                    {authContext.user && (
                      <Router>
                        <AuxDataContext.Consumer>
                          {auxDataContext => auxDataContext.loadAuxData(authContext.token)}
                        </AuxDataContext.Consumer>
                        <Menu />
                        <AlertContext.Consumer>
                          {alertContext => alertContext.showAlert && <Alert />}
                        </AlertContext.Consumer>
                        <Switch>
                          <Route exact path="/" component={Home} />
                          <Route exact path="/events" component={Events} />
                          <Route exact path="/admin" component={Admin} />
                          <Route
                            exact
                            path="/incomings"
                            component={Incomings}
                          />
                          <Route component={NotFound} />
                        </Switch>
                      </Router>
                    )}
                  </React.Fragment>
                ) : (
                  <Login />
                )}
              </React.Fragment>
            )}
          </AuthContext.Consumer>
        </ThemeProvider>
      </ContextProvider>
    );
  }
}

export default App;
