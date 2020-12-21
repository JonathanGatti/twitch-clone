import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamShow from './streams/StreamShow';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';

function App(): JSX.Element {
  return (
    <div className="ui container">
      <Header />
      <Switch>
        <Route exact path="/" render={() => <StreamList />} />
        <Route exact path="/streams/new" render={() => <StreamCreate />} />
        <Route
          exact
          path="/streams/edit/:id"
          render={(routeProps) => <StreamEdit {...routeProps} />}
        />
        <Route
          exact
          path="/streams/delete/:id"
          render={(routeProps) => <StreamDelete {...routeProps} />}
        />
        <Route
          exact
          path="/streams/:id"
          render={(routeProps) => <StreamShow {...routeProps} />}
        />
      </Switch>
    </div>
  );
}

export default App;
