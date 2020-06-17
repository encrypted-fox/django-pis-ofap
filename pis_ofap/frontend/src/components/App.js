import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import {Provider as AlertProvider} from 'react-alert';
import AlertTemplate from "react-alert-template-basic";

import Header from './layout/Header';
import Alerts from "./layout/Alerts";
import Login from "./accounts/Login";
import Register from './accounts/Register';
import PrivateRoute from './common/PrivateRoute';

import {Provider} from 'react-redux';
import store from "../store";
import Requests from './routes/Requests';
import Agreements from './routes/Agreements';

const alertOptions = {
    timeout: 5000,
    position: 'top center'
};

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Router>
                    <Fragment>
                        <Header/>
                        <Alerts/>
                        <div className="container">
                            <Switch>
                                <PrivateRoute exact path='/requests' component={Requests}/>
                                <PrivateRoute exact path='/agreements' component={Agreements}/>
                                <Route exact path='/register' component={Register}/>
                                <Route exact path='/login' component={Login}/>
                            </Switch>
                        </div>
                    </Fragment>
                    </Router>
                </AlertProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));