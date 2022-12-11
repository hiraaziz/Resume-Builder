export default (state,action)=>{
    switch(action.type){
        case 'ADD_WORK':
            return{
                ...state,
                work:[...state.work,action.payload]
            }
        case 'EDIT_WORK':
            return{
                ...state,
                work:state.work.map((wk,ind)=>wk.id===action.payload.index?action.payload.editwork:wk)
            }
        case 'REMOVE_WORK':
            return{
                work: state.work.filter((wk,ind)=>ind!==action.payload)
            }
        default:
            return state;
    }
}