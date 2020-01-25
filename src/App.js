import React, {Fragment} from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Main from "./containers/Main/Main";
import Toolbar from "./components/Toolbar/Toolbar";
import NewContact from "./containers/NewContact/NewContact";
import EditContact from "./containers/EditContact/EditContact";

const App = () => {
    return (
        <Fragment>
            <Toolbar/>
            <Switch>
                <Route path='/' exact component={Main}/>
                <Route path='/new' exact component={NewContact}/>
                <Route path='/edit/:id' component={EditContact}/>
            </Switch>
        </Fragment>
    );
};

export default App;
