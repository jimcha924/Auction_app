
const starships = (state, action) => {
    
    if(state === undefined){
        state = {
            starships: []
        }
    }
    switch(action.type){
        case "LOAD":
            return {
                ...state,
                starships: action.data
            }
        default:
            return state;
    }

}

export default starships;
