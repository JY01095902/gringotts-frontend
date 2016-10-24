/*

state: {
    application:{
        prompt: {
            show: false,
            config: {
                title: '',
                text: '',
                onOk: (value) => (value){ ... },
                onCancel: () => (){ ... }
            }
        },
        ...
    }
    vaults: {
        status: STATUS,
        error: {
            title: 'string',
            message: 'string'
        },
        items: {
            '57d10da73942683a34c1c8c3': {
                id: '57d10da73942683a34c1c8c3'，
                name: 'Personal-Cash',
                type: 'Cash',
                amount: 100.00,
                style:{
                    color: '#000',
                    background_color: '#fff'
                },
                details: {
                    user_name: '45898712',
                    mobile_phone_number: '13652598745',
                    email: 'zhangyi@126.com',
                    nick_name: '张一',
                    issuing_bank: '建设银行',
                    card_number: '7845 1264 4898 4321',
                    credit_limit: 5000.00
                },
                tenant_id: 1,
                owner_user_id: 1
            },
            ...
        }
    },
    categories：{
        status: STATUS,
        error: {
            title: 'string',
            message: 'string'
        },
        items: {
            ...
        }
    },
    payments{
        status: STATUS,
        error: {
            title: 'string',
            message: 'string'
        },
        items: {
            ...
        }
    }
}

*/

import { combineReducers } from 'redux';
import vaultsReducer from './vaults';
import applicationReducer from './application';

export default combineReducers({
    vaults: vaultsReducer,
    application: applicationReducer
});