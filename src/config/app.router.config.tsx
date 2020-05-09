import React from 'react';
import {Route, Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import {configureStore} from "./store.config";
import {createBrowserHistory} from "history";
import ContainerComponent from "./Container.component";

const history = createBrowserHistory();

export const AppRouter = () => (
    <Provider store={ configureStore({ initialState: {} }) }>
            <Router history={ history }>
                    <Route path='/' component={ ContainerComponent}></Route>
            </Router>
    </Provider>
)
