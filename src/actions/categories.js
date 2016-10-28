import { 
    ADD_CATEGORY_REQUEST,
    ADD_CATEGORY_SUCCESS,
    ADD_CATEGORY_FAILURE,
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE,
    CHECK_CATEGORY
} from '../constants/ActionTypes';
import categories from '../apis/categories';
import { createAction } from 'redux-actions';
import { account } from '../session';

let action_add_category_request = createAction(ADD_CATEGORY_REQUEST);
let action_add_category_success = createAction(ADD_CATEGORY_SUCCESS);
let action_add_category_failure = createAction(ADD_CATEGORY_FAILURE);

let action_fetch_categories_request = createAction(FETCH_CATEGORIES_REQUEST);
let action_fetch_categories_success = createAction(FETCH_CATEGORIES_SUCCESS);
let action_fetch_categories_failure = createAction(FETCH_CATEGORIES_FAILURE);

let action_check_category = createAction(CHECK_CATEGORY);

export function addCategory(category){
    category.tenant_id = account.tenant_id;
    category.creator_user_id = account.user_id;
    return dispatch => {
        dispatch(action_add_category_request());
        categories.addCategory(category,
            category => {
                dispatch(action_add_category_success(category));
            },
            error => {
                dispatch(action_add_category_failure(error));
            }
        );
    }
}

export function fetchCategories(){
    return dispatch => {
        dispatch(action_fetch_categories_request());
        categories.fetchCategories(
            categories => {
                dispatch(action_fetch_categories_success(categories));
            },
            error => {
                dispatch(action_fetch_categories_failure(error));
            }
        );
    }
}

export function checkCategory(id){
    return dispatch => {
        dispatch(action_check_category(id));
    }
}