import React from 'react'
import { Globalcontext } from '../../context/context';
import Education from './education';
import { useState, useContext } from 'react';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import styles from './multicomp.module.css'
import Workcomponent from '../work/Workcomponent';
import Select from '../Select/Select';

const Multiplecomp = () => {

  const {educount,seteducount}=useContext(Globalcontext)

  function plusEducation() {
    seteducount(prev => prev + 1)
  }

  return (

    <div className={styles.eduContainer}>
      <h1>Enter Your Education</h1>
      <CardContent>
        <Button onClick={plusEducation}>Add Field</Button>
        <div className={styles.educationfield}>
          {[...Array(educount)].map((el, i) => (<Education key={i} val={i} seteducount={seteducount} />))}
        </div>
      </CardContent>
      <div className={styles.sectionthree}>
          <Link className={styles.link} to="/selectskills" element={<Select/>}><Button>Back</Button></Link>
          <Link className={styles.link} to="/work" element={<Workcomponent />}><Button>Next</Button></Link>
      </div>
    </div>

  )
}

export default Multiplecomp