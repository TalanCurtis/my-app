
// Initial State
const initialState = {
    test: 'Default Value'
};

// Action Types
const GET_TEST_INFO = 'GET_TEST_INFO'

// Action Creator
export function getTestInfo() {
    console.log('get test info action triggered');
     return {
         type: GET_TEST_INFO,
         payload: 'PLACEHOLDER VALUE'
     }
}

// Reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_TEST_INFO: console.log(action.payload); return Object.assign({}, state, { test: action.payload });
        default: return state
    }
}

