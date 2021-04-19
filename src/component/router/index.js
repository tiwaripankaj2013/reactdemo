import React from 'react';
import Home from '../home/';
import About from '../about'
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Header from '../header/';
import FooterComponent from '../footer/';



const AppRoute = () => {
    return(
    <Router>
      <Header />
      <Switch>
      <Route exact path='/' component={Home} />
      <Route  path='/about' component={About} />
      </Switch>
      <FooterComponent/>
    </Router>
    )
}

export default AppRoute;