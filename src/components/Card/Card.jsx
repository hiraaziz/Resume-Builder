import React,{useContext, useState,useEffect} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import { FormControl,InputLabel, Input, FormHelperText, Button } from '@mui/material';
import { Globalcontext } from '../../context/context';
import { Link } from 'react-router-dom';
import Contacts from '../Contacts/Contacts';
import Select from '../Select/Select';
import styles from'./styles.module.css'

const Cards = () => {
  
  const {setnames,setposition,setdescription, names, position, description} = useContext(Globalcontext)

  return (
    <div className={styles.cardcontainer}>
      <h1>Your Information</h1>
        <div className={styles.personalInfo}>
          <TextField
          className={styles.textfield}
            required
            size='small'
            id="outlined-required1"
            label="Name"
            value={names}
            onChange={e=>{e.preventDefault() 
              setnames(e.target.value)}}
          />
          <TextField
          className={styles.textfield}
            required
            size='small'
            id="outlined-required2"
            label="Position"
            value={position}
            onChange={e=>setposition(e.target.value)}
          />
          
        </div>
        <TextField 
          className={styles.textfield1}
            required
            multiline
            maxRows={4}
            size='small'
            id="outlined-required3"
            label="Description"
            value={description}
            onChange={e=>setdescription(e.target.value)}
          />
        <h1>Your Social Contacts</h1>
        <Contacts/>
        <Link className={styles.link} to="/selectskills" element={<Select/>}><Button>Next</Button></Link>
    </div>
  )
}

export default Cards