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
            '58100a6539426832281a801f': {
                "tenant_id": 2,
                "owner_user_id": 3,
                "creator_user_id": 3,
                "creation_time_utc": "2016-10-26 01:44:05 UTC",
                "last_modifier_user_id": null,
                "last_modification_time_utc": null,
                "name": "Personal-Cash",
                "amount": 100,
                "type": "CreditCard",
                "style": {
                    "color": "#000",
                    "background_color": "#fff"
                },
                "details": {
                    "user_name": "45898712",
                    "mobile_phone_number": "13652598745",
                    "email": "zhangyi@126.com",
                    "nick_name": "张一",
                    "issuing_bank": "建设银行",
                    "card_number": "7845 1264 4898 4321",
                    "credit_limit": 5000
                },
                "id": "58100a6539426832281a801f"
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
            '58100a9e39426832281a8020': {
                "tenant_id": 2,
                "owner_user_id": 3,
                "creator_user_id": 3,
                "creation_time_utc": "2016-10-26 01:45:02 UTC",
                "last_modifier_user_id": null,
                "last_modification_time_utc": null,
                "name": "AAA",
                "type": "payout",
                "id": "58100a9e39426832281a8020"
            }
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