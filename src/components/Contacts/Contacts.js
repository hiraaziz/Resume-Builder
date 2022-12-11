import React,{useContext} from 'react'
import TextField from '@mui/material/TextField';
import { Globalcontext } from '../../context/context';
import styles from './styles.module.css'

const Contacts = () => {
    const {contacts,setcontacts}=useContext(Globalcontext);
  
  return (
    <div className={styles.contact}>
    <TextField
          required
          size='small'
          id="outlined-required"
          label="email"
          value={contacts.email}
          onChange={e=>setcontacts({...contacts,email:e.target.value})}
        />
        <TextField
          required
          size='small'
          id="outlined-required"
          label="Phone No"
          value={contacts.phone}
          onChange={e=>setcontacts({...contacts,phone:e.target.value})}
        />
        <TextField
          required
          size='small'
          id="outlined-required"
          label="location"
          value={contacts.location}
          onChange={e=>setcontacts({...contacts,location:e.target.value})}
        />
        <TextField
          required
          size='small'
          id="outlined-required"
          label="LinkedIn"
          value={contacts.linkedin}
          onChange={e=>setcontacts({...contacts,linkedin:e.target.value})}
        />
        <TextField
          required
          size='small'
          id="outlined-required"
          label="github"
          value={contacts.github}
          onChange={e=>setcontacts({...contacts,github:e.target.value})}
        />
        <TextField
          required
          size='small'
          id="outlined-required"
          label="twitter"
          value={contacts.twitter}
          onChange={e=>setcontacts({...contacts,twitter:e.target.value})}
        />

    </div>
  )
}

export default Contacts