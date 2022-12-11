import { createContext, useReducer, useState } from "react"
import reducers from "./reducers"
import workreducers from './workreducer'
import { useImmerReducer } from 'use-immer';
import{ projectReducer } from "./projectReducer";
import certificateReducer from './certificateReducer'

const Globalcontext = createContext()

let initialstate = {education:[]}
let workinitialstate = {work:[]}
let project= []
let certificateInitialstate = []

function GlobalProvider({children}){
    
    const [state,dispatch] = useReducer(reducers,initialstate)
    const [workstate,workdispatch] = useReducer(workreducers,workinitialstate)
    const [projects,projectdispatch] = useImmerReducer(projectReducer,project)
    const [certificatestate,certificatedispatch] = useImmerReducer(certificateReducer,certificateInitialstate)

    const [names,setnames]=useState('')
    const [position,setposition]=useState('')
    const [description,setdescription]=useState('')
    const [contacts,setcontacts]=useState({email:'',
    phone:'',
    location:'',
    linkedin:'',
    github:'',
    twitter:''})
    const [skills,setskills]=useState([])
    const [cv_info,setcv_info]=useState({})
    const [educount,seteducount]=useState(1)
    const [workcount,setworkcount]=useState(1)

    function ADD_EDUCATION(newproject){
        
        dispatch({
            type:'ADD_EDUCATION',
            payload:newproject
        })
    }

    function EDIT_EDUCATION(index,editedu){
        dispatch({
            type:'EDIT_EDUCATION',
            payload:{index,editedu}
        })
    }

    function REMOVE_EDUCATION(id){
        dispatch({
            type:'REMOVE',
            payload:id
        })
    }

    function ADD_WORK(newwork){
        workdispatch({
            type:'ADD_WORK',
            payload:newwork
        })
    }

    function EDIT_WORK(index,editwork){
        workdispatch({
            type:'EDIT_WORK',
            payload:{index,editwork}
        })
    }

    function REMOVE_WORK(id){
        workdispatch({
            type:'REMOVE_WORK',
            payload:id
        })
    }

    return(
        <Globalcontext.Provider value={{education:state.education,
        work:workstate.work,
        projects:projects,
        certificates:certificatestate,
        cv_info,setcv_info,
        names,setnames,
        position,setposition,
        setdescription,description,
        setcontacts,contacts,
        skills,setskills,
        ADD_EDUCATION,EDIT_EDUCATION,REMOVE_EDUCATION,
        ADD_WORK,
        EDIT_WORK,
        REMOVE_WORK,
        projectdispatch ,
        certificatedispatch,
        educount,seteducount,
        workcount,setworkcount}}>
            {children}
        </Globalcontext.Provider>
    )
}
export {GlobalProvider, Globalcontext}
