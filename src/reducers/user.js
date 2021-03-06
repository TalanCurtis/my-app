
// Initial State
const initialState = {
    user: {}
};

// Action Types
const GET_USER_INFO = 'GET_USER_INFO'

// Action Creator
export function getUserInfo() {
    console.log('get user infor action triggered');
    /*
    const userInfo = axios.get('/auth/me').then(res=>{ return res.data})
     return {
         type: GET_USER_INFO,
         payload: userInfo
     }
    */
}

// Reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO: return Object.assign({}, state, { user: action.payload });
        default: return state
    }
}

