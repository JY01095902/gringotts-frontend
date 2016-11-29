import { handleActions } from 'redux-actions';

const categorysReducer = handleActions({
    CHECK_CATEGORY: (state, action) => {
        console.log('state', state)
        for(let key in state.value){
            if(key === action.payload){
                state.value[key].checked = true;
            }else{
                state.value[key].checked = false;
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
            const value = Object.assign({}, state.value, normalizedCategory);
            return Object.assign({}, state, {
                status: action.type,
                value: value
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
        let value = action.payload.reduce((obj, category) => {
            category.checked = false;
            category.dataStatus = action.type;
            obj[category.id] = category;
            return obj;
        }, {});

        return Object.assign({}, state, {
            status: action.type,
            value: value
        });
    },
    FETCH_CATEGORIES_FAILURE: (state, action) => {
        return Object.assign({}, state, {
            status: action.type,
            error: action.payload
        });
    },
    DELETE_CATEGORY_REQUEST: (state, action) => {
        let deletedCategory = state.value[action.payload];
        deletedCategory.dataStatus = action.type;
        let category = {};
        category[deletedCategory.id] = deletedCategory;
        
        const value = Object.assign({}, state.value, category);
        return Object.assign({}, state, {
            status: action.type,
            value: value
        });
    },
    DELETE_CATEGORY_SUCCESS: (state, action) => {
        let value = state.value;
        delete value[action.payload];

        return Object.assign({}, state, {
            status: action.type,
            value: value
        });
    },
    DELETE_CATEGORY_FAILURE: (state, action) => {
        let deletedCategory = state.value[action.payload.id];
        deletedCategory.dataStatus = action.type;
        let category = {};
        category[deletedCategory.id] = deletedCategory;
        
        const value = Object.assign({}, state.value, category);
        return Object.assign({}, state, {
            status: action.type,
            value: value,
            error: action.payload.error
        });
    },
    PATCH_CATEGORY_REQUEST: (state, action) => {
        let patchedCategory = state.value[action.payload];
        patchedCategory.dataStatus = action.type;
        let category = {};
        category[patchedCategory.id] = patchedCategory;

        const value = Object.assign({}, state.value, category);
        return Object.assign({}, state, {
            status: action.type,
            value: value
        });
    },
    PATCH_CATEGORY_SUCCESS: (state, action) => {
        let patchedCategory = action.payload.category;
        patchedCategory.dataStatus = action.type;
        let category = {};
        category[patchedCategory.id] = Object.assign({}, state.value[action.payload.id], patchedCategory);
        const value = Object.assign({}, state.value, category);
        return Object.assign({}, state, {
            status: action.type,
            value: value
        });
    },
    PATCH_CATEGORY_FAILURE: (state, action) => {
        let patchedCategory = state.value[action.payload.id];
        patchedCategory.dataStatus = action.type;
        let category = {};
        category[patchedCategory.id] = patchedCategory;
        
        const value = Object.assign({}, state.value, category);
        return Object.assign({}, state, {
            status: action.type,
            value: value,
            error: action.payload.error
        });
    }
}, {});

export default categorysReducer;