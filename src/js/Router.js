import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './container/Home';
import Header from './Header';
import Ranking from './container/Ranking';


const Router=()=>{
    return(
        <div>
            <Header />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/ranking" exact component={Ranking}/>
    
            </Switch>
        </div>
    );
};
export default Router;
  