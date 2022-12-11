export default (state,action)=>{
    switch(action.type){
        case 'ADD_EDUCATION':
            return{
                ...state,
                education:[...state.education,action.payload]
            }
        case 'EDIT_EDUCATION':
            return{
                ...state,
                education:state.education.map((edu,ind)=>edu.id===action.payload.index?action.payload.editedu:edu)
            }
        case 'REMOVE':
            return{
                education: state.education.filter((edu,ind)=>ind!==action.payload)
            }
        default:
            return state;
    }
}