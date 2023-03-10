const intialData = {
    list:[]
}

const todoReducer = (state= intialData,action)=>{
    switch(action.type){
        case "ADD_TODO":
            const {id,data} = action.payload;
            return {
                ...state,
               list: [
                ...state.list,
                   {
                        id:id,
                        data:data
                }
            ]
        }
        case "DELETE_TODO":
             const newList=   state.list.filter((element)=>element.id!== action.id)
            return {
                ...state,
               list: newList
        }
        case "REMOVE_ALL_TODO":
            return{
                ...state,
                list:[]
            }
        case "EDIT_TODO":
                return{
                    ...state,
                    list:[
                        id,
                        data.value
                    ]
                }

        default : return state;
    }

}

export default todoReducer;