import {types} from './types'

export function fetchData(data){
    console.log(3);
    return{
        type:types.SEND_REQUEST,
        payload:data
    }
}

export const fetchDataSuccess=(user)=>{
    console.log(4);
    console.log(user);
    return{
        type:types.SEND_REQUEST_SUCCESS,
        payload:user,
        error:''
    }
}

export const fetchDataError=(error)=>{
    return{
        type:types.SEND_REQUEST_FAILURE,
        payload:{},
        error:error
    }
}