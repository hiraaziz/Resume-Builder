import React from 'react'
import { useState, useEffect, useContext, useRef } from 'react';
import { Globalcontext } from '../../context/context';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { v4 as uuid } from 'uuid';
import styles from './styles.module.css'
import Select from '../Select/Select';

const Work = ({ val, setworkcount }) => {

  const { work, ADD_WORK, EDIT_WORK, REMOVE_WORK } = useContext(Globalcontext)
  const [workexp, setworkexp] = useState({ company: '', position: '', start: '', end: '' })
  const [editvalue, seteditvalue] = useState(false)
  const [field, setfield] = useState(false)

  useEffect(() => {
    if(work[val]) {
      setworkexp(work[val])
      setfield(true)
      seteditvalue(true)
    }
  }, [work])

  function onsubmit(e) {

    e.preventDefault()
    if (editvalue) {

      const edited_index = work.find((wk, i) => val === i)
      const { company, position, start, end } = workexp
      const editwk = { company, position, start, end }
      EDIT_WORK(edited_index.id, editwk)
      setfield(prev => !prev)
    }
    else {

      const id = uuid();
      const { company, position, start, end } = workexp
      const newedu = { id, company, position, start, end }
      ADD_WORK(newedu)
      seteditvalue(prev => !prev)
      setfield(prev => !prev)

    }
  }

  function minButton() {

    REMOVE_WORK(val)
    setworkcount(prev => prev - 1)
  }

  function editButton() {
    setfield(prev => !prev)
  }

  return (
    <>
        <div className={styles.workcontent}>
          <TextField
            size='small'
            required
            id="outlined-required"
            label="Company"
            onChange={e => setworkexp({ ...workexp, company: e.target.value })}
            value={workexp.company}
            InputProps={{
              readOnly: field,
            }}
          />

          <TextField
            required
            id="outlined-required"
            label="POSITION"
            size='small'
            onChange={e => setworkexp({ ...workexp, position: e.target.value })}
            value={workexp.position}
            InputProps={{
              readOnly: field,
            }}
          />

          <TextField
            required
            id="outlined-required"
            label="Start year"
            size='small'
            onChange={e => setworkexp({ ...workexp, start: e.target.value })}
            value={workexp.start}
            InputProps={{
              readOnly: field,
            }}
          />

          <TextField
            required
            id="outlined-required"
            label="End Year"
            size='small'
            onChange={e => setworkexp({ ...workexp, end: e.target.value })}
            value={workexp.end}
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

export default Work