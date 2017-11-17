import React, { Component } from 'react';
import Header from './Header';
import { Switch, Route, Redirect } from 'react-router-dom';
import '../styles/App.css';
import Login from './Login';
import LinkList from './LinkList';
import CreateLink from './CreateLink';
import Search from './Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/new/1" />} />
            <Route exact path="/top" component={LinkList} />
            <Route exact path="/new/:page" component={LinkList} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/create" component={CreateLink} />
            <Route exact path="/search" component={Search} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
