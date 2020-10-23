
import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
});


export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
});

const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data)
});

//有了thunk，返回一个函数(派发一个异步请求)
export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(changeList(data.data));
        }).catch(() => {
            console.log('error');
        })
    }
};