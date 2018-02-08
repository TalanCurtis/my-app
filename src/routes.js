import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Placeholder from './components/Placeholder/Placeholder';
import Auth from './components/Auth/Auth';

export default (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route path='/Dashboard' component={Placeholder} />
    </Switch>
)