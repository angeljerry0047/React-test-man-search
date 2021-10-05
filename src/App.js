import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

const ViewMain = React.lazy(() =>
  import('./views')
);
const ViewPage = React.lazy(() =>
  import('./views/pages')
);
const ViewError = React.lazy(() =>
  import('./views/error')
);

class App extends React.Component {

  render() {
    return (
      <div className="h-100">
        {
          <Suspense fallback={<div className="loading" />}>
            <Router>
              <Switch>
                <Route
                  path="/pages"
                  render={(props) => <ViewPage {...props} />}
                />
                <Route
                  path="/error"
                  exact
                  render={(props) => <ViewError {...props} />}
                />
                <Route
                  path="/"
                  exact
                  render={(props) => <ViewMain {...props} />}
                />
                <Redirect to="/error" />
              </Switch>
            </Router>
          </Suspense>
        }
      </div>
    );
  }
}

const mapStateToProps = ({ settings }) => {
  const { locale, countryCode } = settings;
  return { locale, countryCode };
};
const mapActionsToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapActionsToProps)(App);
