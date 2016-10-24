import { 
    SHOW_PROMPT,
    CLOSE_PROMPT
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