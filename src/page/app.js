import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

import Login from './login/login';
import Index from 'page/index/index'
import Menu from 'page/menu/menu'

const App = () => (
    <Router>
        <div className="main">
            <Route exact path="/" component={Index} />
            <Route  path="/menu" component={Menu} />
            <Route  path="/login" component={Login} />
        </div>
    </Router>
);


export default App;