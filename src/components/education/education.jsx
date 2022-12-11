import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { Globalcontext } from '../../context/context';
import styles from './education.module.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { v4 as uuid } from 'uuid';

const Education = ({ val, seteducount }) => {

  const { education, ADD_EDUCATION, EDIT_EDUCATION, REMOVE_EDUCATION } = useContext(Globalcontext)
  const [edu, setedu] = useState({ institute: '', degree: '', start: '', end: '' })
  const [editvalue, seteditvalue] = useState(false)
  const [field, setfield] = useState(false)

  useEffect(() => {

    if (education[val]) {
      setedu(education[val])
      setfield(true)
      seteditvalue(true)
    }
  }, [education])

  
  function onsubmit(e) {
    
    e.preventDefault()

    if (editvalue) {
      if(!field){
        const edited_index = education.find((edu, i) => val === i)
        const { institute, degree, start, end } = edu
        const editedu = { institute, degree, start, end }
        EDIT_EDUCATION(edited_index.id, editedu)
        setfield(prev => !prev)
      }
    }
    else {

      const id = uuid();
      const { institute, degree, start, end } = edu
      const newedu = { id, institute, degree, start, end }
      ADD_EDUCATION(newedu)
      seteditvalue(prev => !prev)
      setfield(prev => !prev)
    }
  }

  function minButton() {

    REMOVE_EDUCATION(val)
    seteducount(prev => prev - 1)
  }

  function editButton() {
    setfield(prev => !prev)
  }

  return (
    <>
      
        <div className={styles.educontent}>
          <TextField
            size='small'
            required
            id="outlined-required"
            label="Educational Institute"
            onChange={e => setedu({ ...edu, institute: e.target.value })}
            value={edu.institute}
            InputProps={{
              readOnly: field,
            }}
          />

          <TextField
            required
            id="outlined-required"
            label="Degree"
            size='small'
            onChange={e => setedu({ ...edu, degree: e.target.value })}
            value={edu.degree}
            InputProps={{
              readOnly: field,
            }}
          />

          <TextField
            required
            id="outlined-required"
            label="Start year"
            size='small'
            onChange={e => setedu({ ...edu, start: e.target.value })}
            value={edu.start}
            InputProps={{
              readOnly: field,
            }}
          />

          <TextField
            required
            id="outlined-required"
            label="End Year"
            size='small'
            onChange={e => setedu({ ...edu, end: e.target.value })}
            value={edu.end}
            InputProps={{
              readOnly: field,
            }}
          />
          <div  onClick={e => onsubmit(e)} className={`${field? styles.edithide : styles.editshow}`}><Button>Save</Button></div>
          <Button onClick={minButton}>Delete</Button>
          <div onClick={editButton} className={`${field? styles.editshow : styles.edithide}`}><Button>Edit</Button></div>
        </div>
      
    </>
  )
}

export default Education