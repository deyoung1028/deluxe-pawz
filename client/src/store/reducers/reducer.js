

const initialState = {
    isAuthenticated: false
}

const Reducer = (state = initialState, action) => {
    switch(action.type){
        case 'ON_LOGIN':
            return{
                ...state,
                isAuthenticated: true
                
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

export default Reducer
