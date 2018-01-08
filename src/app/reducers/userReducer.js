/**
 * Created by prakashchandrabarnwal on 31/12/17.
 */

const userReducer=(state={"name":"Prakash"},action)=>{
    switch (action.type){
        case "name_FULFILLED":
            state={...state,"name":action.payload}
    }
    return state
}



export default userReducer