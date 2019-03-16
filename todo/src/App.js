import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './home';
import Login from './login';

const app = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
            </Switch>
        </BrowserRouter>
    )
}

export default app;
