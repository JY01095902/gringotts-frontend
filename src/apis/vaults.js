import axios from 'axios';
import { serverRoots } from '../config';

export default {
    addVault: (vault, successCallback, failureCallback) => {
        console.log('正在添加金库...', vault);
        const headers = {
            'Content-Type': 'application/json', 
            'Accept': 'application/json'
        };
        axios.post(`${serverRoots.gringotts}/vaults`, vault, { headers: headers })
        .then(function(response) {
            successCallback(response.data);
            console.log('添加金库成功.');
        })
        .catch(function(error) {
            console.log('添加金库失败!', error);
            let message = null;
            if(error.response === undefined){
                message = error.message;
            }else{
                message = error.response.data.error.message;
            }
            failureCallback({
                title: '添加金库失败',
                message: message
            });
        })
    },
    fetchVaults: (successCallback, failureCallback) => {
        console.log('正在获取金库...');
        const headers = {
            'Content-Type': 'application/json', 
            'Accept': 'application/json'
        };
        axios.get(`${serverRoots.gringotts}/vaults`, { headers: headers })
        .then(function(response) {
            successCallback(response.data);
            console.log('添加金库成功.');
        })
        .catch(function(error) {
            console.log('获取金库失败!', error);
            let message = null;
            if(error.response === undefined){
                message = error.message;
            }else{
                message = error.response.data.error.message;
            }
            failureCallback({
                title: '获取金库失败',
                message: message
            });
        })
    }
};