import { 
    ADD_VAULT_REQUEST,
    ADD_VAULT_SUCCESS,
    ADD_VAULT_FAILURE,
    FETCH_VAULTS_REQUEST,
    FETCH_VAULTS_SUCCESS,
    FETCH_VAULTS_FAILURE
} from '../constants/ActionTypes';
import vaults from '../apis/vaults';
import { createAction } from 'redux-actions';
import { account } from '../session';

let action_add_vault_request = createAction(ADD_VAULT_REQUEST);
let action_add_vault_success = createAction(ADD_VAULT_SUCCESS);
let action_add_vault_failure = createAction(ADD_VAULT_FAILURE);

let action_fetch_vaults_request = createAction(FETCH_VAULTS_REQUEST);
let action_fetch_vaults_success = createAction(FETCH_VAULTS_SUCCESS);
let action_fetch_vaults_failure = createAction(FETCH_VAULTS_FAILURE);

export function addVault(vault){
    vault.tenant_id = account.tenant_id;
    vault.creator_user_id = account.user_id;
    return dispatch => {
        dispatch(action_add_vault_request);
        vaults.addVault(vault,
            vault => {
                dispatch(action_add_vault_success(vault));
            },
            error => {
                dispatch(action_add_vault_failure(error));
            }
        );
    }
}

export function fetchVaults(){
    return dispatch => {
        dispatch(action_fetch_vaults_request);
        vaults.fetchVaults(
            vaults => {
                dispatch(action_fetch_vaults_success(vaults));
            },
            error => {
                dispatch(action_fetch_vaults_failure(error));
            }
        );
    }
}