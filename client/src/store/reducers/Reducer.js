

const initialState = {
    customer_id:''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'ON_LOGIN':
            return{
                ...state,
                isAuthenticated: false
            }
        case 'ON_LOGOUT':
            return{
                ...state,
                isAuthenticated: false
            }
        default:
            return state
    }
}

export default reducer