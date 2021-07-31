const themeModeReducer = (state = "light", action) =>{
    switch(action.type){
        case 'SWITCH_TO_DARK':
            return "dark"
        case 'SWITCH_TO_MAIN':
            return "main"
        case 'SWITCH_TO_LIGHT':
            return "light"
        default:
            return state
    }
}

export default themeModeReducer;