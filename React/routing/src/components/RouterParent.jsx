import React from 'react';
import { Router} from '@reach/router';
import Home from './Home';
import Number from './Number_Word';
import Colored from './Colored';

const RouterParent = props => {

    return(
    <Router>
        <Home path="/home"/>
        <Number path="/:isnum"/>
        <Colored path="/:word/:color/:bgcolor"/>
    </Router>
    )
}

export default RouterParent;