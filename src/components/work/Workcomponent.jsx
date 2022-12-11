import React from 'react'
import { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';
import styles from './Workcomponent.module.css'
import Work from './Work';
import ProjectCertificate from '../ProjectCertificate/ProjectCertificate';
import Education from '../education/education';
import { Globalcontext } from '../../context/context';

const Workcomponent = () => {
   
    const {workcount,setworkcount}=useContext(Globalcontext)

    function plusEducation() {
        setworkcount(prev => prev + 1)
    }

    return (

        <div className={styles.workContainer}>
            <h1>Enter Your Work Experience</h1>
            <CardContent>
                <Button onClick={plusEducation}>Add Field</Button>
                <div className={styles.workfield}>
                    {[...Array(workcount)].map((el, i) => (<Work key={i} val={i} setcount={setworkcount} />))}
                </div>
            </CardContent>
            <div className={styles.sectionthree}>
                <Link className={styles.link} to="/education" element={<Education/>}><Button>Back</Button></Link>
                <Link className={styles.link} to="/ProCer" element={<ProjectCertificate/>}><Button>Next</Button></Link>
            </div>
        </div>

    )
}

export default Workcomponent