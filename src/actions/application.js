import { 
    SHOW_PROMPT,
    CLOSE_PROMPT,
    SHOW_CONFIRM,
    CLOSE_CONFIRM
} from '../constants/ActionTypes';
import { createAction } from 'redux-actions';

let action_show_prompt = createAction(SHOW_PROMPT);
let action_close_prompt = createAction(CLOSE_PROMPT);

export function showPrompt(config){
    return dispatch => {
        dispatch(action_show_prompt(config));
    }
}

export function closePrompt(){
    return dispatch => {
        dispatch(action_close_prompt());
    }
}

let action_show_confirm = createAction(SHOW_CONFIRM);
let action_close_confirm = createAction(CLOSE_CONFIRM);

export function showConfirm(config){
    return dispatch => {
        dispatch(action_show_confirm(config));
    }
}

export function closeConfirm(){
    return dispatch => {
        dispatch(action_close_confirm());
    }
}