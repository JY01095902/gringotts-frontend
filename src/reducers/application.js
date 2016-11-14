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
    },
    SHOW_CONFIRM: (state, action) => {
        return Object.assign({}, state, { 
            confirm: {
                show: true,
                config: action.payload 
            }
        });
    },
    CLOSE_CONFIRM: (state, action) => {
        return Object.assign({}, state, { 
            confirm: {
                show: false,
                config: {}
            } 
        });
    },
    SHOW_POPOVER: (state, action) => {
        return Object.assign({}, state, { 
            popover: {
                show: true,
                config: action.payload 
            }
        });
    },
    CLOSE_POPOVER: (state, action) => {
        return Object.assign({}, state, { 
            popover: {
                show: false,
                config: {}
            } 
        });
    }
}, {
    prompt: {
        show: false,
        config: {}
    },
    confirm: {
        show: false,
        config: {}
    },
    popover: {
        show: false,
        config: {}
    }
});

export default applicationReducer;