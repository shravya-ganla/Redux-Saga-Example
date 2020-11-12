import React, { Component } from 'react';
import {Provider} from 'react-redux';
import configureStore from './ReduxSaga1/store';
import Display from './ReduxSaga1/components/display';
const store = configureStore();

class App1 extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>     
                    <Display/>    
                </Provider>
            </div>
        );
    }
}

export default App1;