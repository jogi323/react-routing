import React from 'react';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'; 
import List from './components/list';
import Add from './components/add';
import Header from './components/header';
import Todo from './components/todo';
import Todo2 from './components/todo2';

// import App from './App';

class Routes extends React.Component {
    render() { 
        return (
            // <App>
                <Router>
                <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={List}/>
                    <Add>
                        {/* <Route exact path="/" component={Add}/> */}
                        <Route exact path='/add' component={Todo}/>
                        <Route exact path='/add/todo2' component={Todo2}/>                        
                    </Add>
                    
                </Switch>
                </div>
                
            </Router>
            // </App> 
            
         )
    }
}
 
export default Routes;