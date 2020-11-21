import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from './Header';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamShow from './streams/StreamShow';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';


function App(): JSX.Element {
  return (
    <div className='ui container'>
      <Header />
      <Switch> 
        <Route exact path='/' render={() => <StreamList />} /> 
        <Route exact path='/streams/new' render={() => <StreamCreate />} /> 
        <Route exact path='/streams/edit' render={() => <StreamEdit />} /> 
        <Route exact path='/streams/delete' render={() => <StreamDelete />} /> 
        <Route exact path='/streams/show' render={() => <StreamShow />} /> 
      </Switch>
    </div>
  );
}

export default App;
