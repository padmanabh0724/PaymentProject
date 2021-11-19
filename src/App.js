
import './App.css';
import { Router } from 'react-router-dom';
import {Fragment} from 'react';
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      
      <Router>
        <Fragment>
          <Home />
          <Route exact path="/" component={lastTransactionReport} />
          
          <section className="container">
            <Switch>
              <Route exact path="/Dashboard" component={Dashboard} />
              
            </Switch>
          </section>
          
        </Fragment>
    </Router>

             
    </div>
  );
}

export default App;
