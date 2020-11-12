import {call, put, takeEvery} from 'redux-saga/effects';
import { types } from '../redux/types';
import {fetchDataSuccess} from '../redux/action';
import axios from 'axios'

function* ayscFetchRequest(){
    try{
        const url =`https://jsonplaceholder.typicode.com/posts`
        const response = yield call(()=> axios.get(url))
        const users = response.data
        console.log(users);
        yield put(fetchDataSuccess(users))
    }
    catch(error){
        console.log(error);
    }
}

export function* watchFetchDataSaga(){
    console.log('hello I am watch Saga');
    yield takeEvery(types.SEND_REQUEST,ayscFetchRequest)
}