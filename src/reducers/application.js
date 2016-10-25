import { handleActions } from 'redux-actions';

const applicationReducer = handleActions({
    SHOW_PROMPT: (state, action) => {
        return Object.assign({}, state, { 
            prompt: {
                show: true,
                config: action.payload 
            }
        });
    },
    CLOSE_PROMPT: (state, action) => {
        return Object.assign({}, state, { 
            prompt: {
                show: false,
                config: {}
            } 
        });
    }
}, {
    prompt: {
        show: false,
        config: {}
    } 
});

export default applicationReducer;