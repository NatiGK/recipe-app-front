const login=(state={logged:false}, action)=>{
    switch(action.type){
        case 'LOGIN':
            return {
                logged:true,
                user: action.payload
            }
        case 'LOGOUT':
            return {
                logged:false,
            }
        default:
            return state
    }
}
export default login;