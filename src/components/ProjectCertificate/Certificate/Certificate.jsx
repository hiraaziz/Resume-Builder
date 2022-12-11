import React, { useState,useContext,useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { v4 as uuid } from 'uuid';
import { Globalcontext } from '../../../context/context';
import styles from './Certificate.module.css'

const Certificates = ({val,setCertificate}) => {
  const {certificates,certificatedispatch,ADD_CERTIFICATE} = useContext(Globalcontext)
  const [certificate, setcertificate]=useState('')
  const [editvalue,seteditvalue] = useState(false)
  const [field, setfield] = useState(false)
  
  useEffect(() => {

    if(certificates[val]) setcertificate(certificates[val].certificate)
  }, [certificates])

  function onsubmit(e) {

    e.preventDefault()
    if (editvalue) {

      if(!field){

        const edited_certificate={id:certificates[val].id,certificate:certificate}
        certificatedispatch({
          type:'EDIT_CERTIFICATE',
          payload:{val,edited_certificate}
        })
        setfield(prev => !prev)

      }
    }
    else {

      const id = uuid();
      certificatedispatch({
        type:'ADD_CERTIFICATE',
        id:id,
        certificate:certificate
      })
      seteditvalue(prev => !prev)
      setfield(prev => !prev)

    }
  }

  function minButton() {

    certificatedispatch({
      type:'REMOVE_CERTIFICATE',
      payload:certificates[val].id
    })
    setCertificate(prev => prev - 1)
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
            label="Certificate"
            onChange={e => setcertificate( e.target.value )}
            value={certificate}
            InputProps={{
              readOnly: field,
            }}
          />
          <Button onClick={e => onsubmit(e)}>Save</Button>
          <Button onClick={minButton}>Delete</Button>
          <div onClick={editButton} className={`${editvalue? styles.editshow : styles.edithide}`}><Button>Edit</Button></div>
    </div>
  )
}

export default Certificates