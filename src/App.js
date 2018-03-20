import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
// import List from './components/list';
// import Add from './components/add';
// import Header from './components/header';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div>
        {/* {this.props.children} */}
        {/* <Header/>      */}
        <Routes/>                     
        {/* <Router>
        <Switch>
          <Route exact path="/" component={List}/>
          <Route exact path="/add" component={Add}/>
        </Switch>
            
      </Router> */}
      </div>
      
    );
  }
}

export default App;
