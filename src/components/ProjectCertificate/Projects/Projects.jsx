import React, { useState, useContext, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { v4 as uuid } from 'uuid';
import { Globalcontext } from '../../../context/context';
import styles from './Project.module.css'

const Projects = ({ val, setProject }) => {
  const { projects, projectdispatch, ADD_PROJECT } = useContext(Globalcontext)
  const [project, setprojects] = useState('')
  const [editvalue, seteditvalue] = useState(false)
  const [field, setfield] = useState(false)

  useEffect(() => {
    if (projects[val]) setprojects(projects[val].project)
  }, [projects])

  function onsubmit(e) {

    e.preventDefault()
    if (editvalue) {

      if (!field) {

        const edited_project = { id: projects[val].id, project: project }
        projectdispatch({
          type: 'EDIT_PROJECT',
          payload: { val, edited_project }
        })
        setfield(prev => !prev)
      }
    }
    else {

      const id = uuid();
      const newproject = { id, project }
      projectdispatch({
        type:'ADD_PROJECT',
        id:id,
        project:project
      })
      seteditvalue(prev => !prev)
      setfield(prev => !prev)

    }
  }

  function minButton() {

    projectdispatch({
      type: 'REMOVE_PROJECT',
      payload: projects[val].id
    })
    setProject(prev => prev - 1)
  }

  function editButton() {
    setfield(prev => !prev)
  }

  return (
    <div>
      <TextField
        size='large'
        required
        id="outlined-required"
        label="Project"
        onChange={e => setprojects(e.target.value)}
        value={project}
        InputProps={{
          readOnly: field,
        }}
      />
      <Button onClick={e => onsubmit(e)}>Save</Button>
      <Button onClick={minButton}>Delete</Button>
      <div onClick={editButton} className={`${editvalue ? styles.editshow : styles.edithide}`}><Button>Edit</Button></div>
    </div>
  )
}

export default Projects