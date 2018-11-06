import React from 'react'
import Header from '../elements/Header/Header';
import Home from '../Home/Home';
import { HashRouter, Route, Switch } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import Movie from '../Movie/Movie';

const App = () => {
    return (
        <HashRouter>
            <React.Fragment>
                <Header />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/:movieId' component={Movie} />
                  <Route component={NotFound} />
                </Switch>
            </React.Fragment>
        </HashRouter>
    )
}

export default App;