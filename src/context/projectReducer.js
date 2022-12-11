export const projectReducer=(draft,action)=>{
    switch(action.type){
        case 'ADD_PROJECT':{
            draft.push({
                id:action.id,
                project:action.project
            });
            break;
        } 
        case 'EDIT_PROJECT':{
            draft[action.payload.val]=action.payload.edited_project;
            break;
        }
        case 'REMOVE_PROJECT':{
            return draft.filter(p=> p.id !== action.payload)
        }
        default:{
            throw Error('unknown: '+ action.type)
        }
    }
}