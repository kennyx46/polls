import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import QuestionsList from './components/QuestionsList';
import QuestionDetail from './components/QuestionDetail';
import NewQuestion from './components/NewQuestion';
import * as serviceWorker from './serviceWorker';
import store from './data/store';
import history from './data/history'

ReactDOM.render(
    (<Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route path="/questions/new" component={NewQuestion} />
                <Route path="/questions/:questionId" component={QuestionDetail} />
                <Route path="/" component={QuestionsList} />
            </Switch>
        </ConnectedRouter>
    </Provider>),
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
