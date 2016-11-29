import { handleActions } from 'redux-actions';

const vaultsReducer = handleActions({
    ADD_VAULT_REQUEST: (state, action) => {
        return Object.assign({}, state, { status: action.type });
    },
    ADD_VAULT_SUCCESS: (state, action) => {
        const vault = action.payload;
        if(vault){
            let normalizedVault = {};
            normalizedVault[vault.id] = vault; 
            const value = Object.assign({}, state.value, normalizedVault);
            return Object.assign({}, state, {
                status: action.type,
                value: value
            });
        }else{
            return Object.assign({}, state, { status: action.type });
        }
    },
    ADD_VAULT_FAILURE: (state, action) => {
        return Object.assign({}, state, {
            status: action.type,
            error: action.payload
        });
    },
    FETCH_VAULTS_REQUEST: (state, action) => {
        return Object.assign({}, state, { status: action.type });
    },
    FETCH_VAULTS_SUCCESS: (state, action) => {
        let value = action.payload.reduce((obj, vault) => {
            obj[vault.id] = vault;
            return obj;
        }, {});

        return Object.assign({}, state, {
            status: action.type,
            value: value
        });
    },
    FETCH_VAULTS_FAILURE: (state, action) => {
        return Object.assign({}, state, {
            status: action.type,
            error: action.payload
        });
    }
}, {});

export default vaultsReducer;