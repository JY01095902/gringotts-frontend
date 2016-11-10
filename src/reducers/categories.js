import { handleActions } from 'redux-actions';

const categorysReducer = handleActions({
    CHECK_CATEGORY: (state, action) => {
        for(let key in state.items){
            if(key === action.payload){
                state.items[key].checked = true;
            }else{
                state.items[key].checked = false;
            }
        }

        return Object.assign({}, state, {
            status: action.type
        });
    },
    ADD_CATEGORY_REQUEST: (state, action) => {
        return Object.assign({}, state, { status: action.type });
    },
    ADD_CATEGORY_SUCCESS: (state, action) => {
        let category = action.payload;
        if(category){
            category.checked = false;
            let normalizedCategory = {};
            normalizedCategory[category.id] = category; 
            const items = Object.assign({}, state.items, normalizedCategory);
            return Object.assign({}, state, {
                status: action.type,
                items: items
            });
        }else{
            return Object.assign({}, state, { status: action.type });
        }
    },
    ADD_CATEGORY_FAILURE: (state, action) => {
        return Object.assign({}, state, {
            status: action.type,
            error: action.payload
        });
    },
    FETCH_CATEGORIES_REQUEST: (state, action) => {
        return Object.assign({}, state, { status: action.type });
    },
    FETCH_CATEGORIES_SUCCESS: (state, action) => {
        let items = action.payload.reduce((obj, category) => {
            category.checked = false;
            category.dataStatus = action.type;
            obj[category.id] = category;
            return obj;
        }, {});

        return Object.assign({}, state, {
            status: action.type,
            items: items
        });
    },
    FETCH_CATEGORIES_FAILURE: (state, action) => {
        return Object.assign({}, state, {
            status: action.type,
            error: action.payload
        });
    },
    DELETE_CATEGORY_REQUEST: (state, action) => {
        let deletedCategory = state.items[action.payload];
        deletedCategory.dataStatus = action.type;
        
        const items = Object.assign({}, state.items, deletedCategory);
        return Object.assign({}, state, {
            status: action.type,
            items: items
        });
    },
    DELETE_CATEGORY_SUCCESS: (state, action) => {
        let items = state.items;
        delete items[action.payload];

        return Object.assign({}, state, {
            status: action.type,
            items: items
        });
    },
    DELETE_CATEGORY_FAILURE: (state, action) => {
        let deletedCategory = state.items[action.payload.id];
        deletedCategory.dataStatus = action.type;
        
        const items = Object.assign({}, state.items, deletedCategory);
        return Object.assign({}, state, {
            status: action.type,
            items: items,
            error: action.payload.error
        });
    },
    PATCH_CATEGORY_REQUEST: (state, action) => {
        let patchedCategory = state.items[action.payload];
        patchedCategory.dataStatus = action.type;
        
        const items = Object.assign({}, state.items, patchedCategory);
        return Object.assign({}, state, {
            status: action.type,
            items: items
        });
    },
    PATCH_CATEGORY_SUCCESS: (state, action) => {
        let items = state.items;
        let patchedCategory = action.payload.category;
        patchedCategory.dataStatus = action.type;
        items[action.payload.id] = Object.assign({}, items[action.payload.id], patchedCategory);

        return Object.assign({}, state, {
            status: action.type,
            items: items
        });
    },
    PATCH_CATEGORY_FAILURE: (state, action) => {
        let patchedCategory = state.items[action.payload.id];
        patchedCategory.dataStatus = action.type;
        
        const items = Object.assign({}, state.items, patchedCategory);
        return Object.assign({}, state, {
            status: action.type,
            items: items,
            error: action.payload.error
        });
    }
}, {});

export default categorysReducer;