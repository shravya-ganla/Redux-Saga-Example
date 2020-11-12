import {take, call, all} from 'redux-saga/effects';

import {watchFetchDataSaga} from './fetchData'

export default function* rootSaga(){
    console.log("RootSaga");
    yield all([
        watchFetchDataSaga()
    ])
}