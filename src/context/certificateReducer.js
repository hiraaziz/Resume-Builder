export default (draft,action)=>{
    switch(action.type){
        case 'ADD_CERTIFICATE':{
            draft.push({
                id:action.id,
                certificate:action.certificate
            });
            break;
        }
        case 'EDIT_CERTIFICATE':{
            draft[action.payload.val]=action.payload.edited_certificate;
            break;
        }
        case 'REMOVE_CERTIFICATE':{
            return draft.filter(c=> c.id !== action.payload)
        }
        default:{
            throw Error('unknown:'+action.type)
        }
    }
}