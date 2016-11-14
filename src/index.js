import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import thunk from 'redux-thunk';
import reducer from './reducers';
import './index.css';
import MobileMainPage from './pages/mobile/MainPage';
import MobileHomePage from './pages/mobile/HomePage';
import MobileNewPaymentPage from './pages/mobile/NewPaymentPage';
import MobileVaultsPage from './pages/mobile/VaultsPage';
import MobileTestPage from './pages/mobile/TestPage';
import TabletMainPage from './pages/tablet/MainPage';
import TabletHomePage from './pages/tablet/HomePage';
import DesktopMainPage from './pages/desktop/MainPage';
import DesktopHomePage from './pages/desktop/HomePage';

const finalCreateStore = applyMiddleware(thunk)(createStore);
let store = finalCreateStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={App}>
                <Route path='mobile' component={MobileMainPage}>
                    <IndexRoute component={MobileHomePage}/>
                    <Route path='newPayment' component={MobileNewPaymentPage}/>
                    <Route path='vaults' component={MobileVaultsPage}/>
                    <Route path='test' component={MobileTestPage}/>
                </Route>
                <Route path='tablet' component={TabletMainPage}>
                    <IndexRoute component={TabletHomePage}/>
                </Route>
                <Route path='desktop' component={DesktopMainPage}>
                    <IndexRoute component={DesktopHomePage}/>
                </Route>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);