import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from '../../layout/AppLayout';

const Search = React.lazy(() =>
  import('./search')
);

const Result = React.lazy(() =>
  import('./result')
);

const Error = React.lazy(() =>
  import('../error')
);

const isValue = (value) => {
  return /^(?:[A-Za-z]+|\d+)$/.test(value);
}

const App = ({ match }) => {
  return (
    <AppLayout>
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/search`} />
            <Route
              path={`${match.url}/search`}
              render={(props) => <Search {...props} />}
            />
            <Route
              exacts
              strict
              path={`${match.url}/result/:value`}
              render={({ match }) => {
                if (isValue(match.params.value)) {
                  return (
                    <Result value={match.params.value} />
                  )
                } else {
                  return <Redirect to="/error" />
                }
              }}
            />
            <Route
              exact
              path={`/error`}
              render={(props) => <Error {...props} />}
            />
            <Redirect to="/error" />
          </Switch>
        </Suspense>
      </div>
    </AppLayout>
  );
};

const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(App));
