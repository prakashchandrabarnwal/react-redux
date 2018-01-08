/**
 * Created by prakashchandrabarnwal on 31/12/17.
 */
const setName=(name)=>{
   /* return dispatch=>{
        setTimeout(()=>{
            dispatch({type:"name",
                payload:"bikky"})
        },2000)

    }*/
   return {
       type:"name",
       payload: new Promise((res,rej)=>{
           setTimeout(()=>{
              res(name)},2000)
           })
   }
}

export default setName