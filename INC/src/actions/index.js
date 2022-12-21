export const incrementNumber = (num)=>{
        return{
            type:"INCREMENT",
            playload:num
        }
}

export const decrimentNumber = ()=>{
    return{
        type:"DECREMENT"
    }

}