import React, { Component } from 'react';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter5Adapter } from 'use-query-params/adapters/react-router-5';
import { parse, stringify } from 'query-string';

// Import Routes
import { authProtectedRoutes, nftRoutes, publicRoutes } from './routes/';
import AppRoute from './routes/route';

// layouts
import HorizontalLayout from './components/VerticalLayout/';
import NonAuthLayout from './components/NonAuthLayout';

// Import scss
import './theme.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getLayout = this.getLayout.bind(this);
  }

  /**
   * Returns the layout
   */
  getLayout = () => {
    return HorizontalLayout;
  };

  render() {
    const Layout = this.getLayout();

    return (
      <React.Fragment>
        <Router>
          <QueryParamProvider
            adapter={ReactRouter5Adapter}
            options={{
              searchStringToObject: parse,
              objectToSearchString: stringify
            }}>
            <Switch>
              {publicRoutes.map((route, idx) => (
                <AppRoute
                  path={route.path}
                  layout={NonAuthLayout}
                  component={route.component}
                  key={idx}
                  isAuthProtected={false}
                />
              ))}

              {authProtectedRoutes.map((route, idx) => (
                <AppRoute
                  path={route.path}
                  layout={Layout}
                  component={route.component}
                  key={idx}
                  isAuthProtected={true}
                />
              ))}

              {nftRoutes.map((route, idx) => (
                <AppRoute
                  path={route.path}
                  layout={Layout}
                  component={route.component}
                  key={idx}
                  isAuthProtected={true}
                />
              ))}
            </Switch>
          </QueryParamProvider>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
