import axios from 'axios';
import { serverRoots } from '../config';

export default {
    addCategory: (category, successCallback, failureCallback) => {
        console.log('正在添加分类...', category);
        const headers = {
            'Content-Type': 'application/json', 
            'Accept': 'application/json'
        };
        axios.post(`${serverRoots.gringotts}/categories`, category, { headers: headers })
        .then(function(response) {
            successCallback(response.data);
            console.log('添加分类成功.');
        })
        .catch(function(error) {
            console.log('添加分类失败!', error);
            let message = null;
            if(error.response === undefined){
                message = error.message;
            }else{
                message = error.response.data.error.message;
            }
            failureCallback({
                title: '添加分类失败',
                message: message
            });
        })
    },
    fetchCategories: (successCallback, failureCallback) => {
        console.log('正在获取分类...');
        const headers = {
            'Content-Type': 'application/json', 
            'Accept': 'application/json'
        };
        axios.get(`${serverRoots.gringotts}/categories`, { headers: headers })
        .then(function(response) {
            successCallback(response.data);
            console.log('获取分类成功.');
        })
        .catch(function(error) {
            console.log('获取分类失败!', error);
            let message = null;
            if(error.response === undefined){
                message = error.message;
            }else{
                message = error.response.data.error.message;
            }
            failureCallback({
                title: '获取分类失败',
                message: message
            });
        })
    }
};