import React, { useContext, useState } from 'react'
import Projects from './Projects/Projects';
import Certificates from './Certificate/Certificate'
import { Globalcontext } from '../../context/context'
import Button from '@mui/material/Button';
import Download_Link from '../Generate_CV/Download_Link';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';
import styles from './styles.module.css'
import Work from '../work/Work';


const ProjectCertificate = () => {
    const { work, education, setcv_info, names, position, contacts, description, skills, certificates, projects } = useContext(Globalcontext)
    const [Project, setProject] = useState(1);
    const [Certificate, setCertificate] = useState(1);
    const [download,setdownload]=useState(false)

    function Submitvalues() {
        setcv_info({ names, position, description, skills, contact: contacts, education, work, certificates, projects })
        setdownload(true)
    }

    function plus_project() {
        setProject(prev => prev + 1)
    }
    function plus_certificate() {
        setCertificate(prev => prev + 1)
    }

    return (
        <div>

            <div className={styles.ProCer}>

                <div className={styles.sectionOne}>
                    <div className={styles.Project}>
                        <h2>Enter Your Projects</h2>
                        <CardContent>
                            <Button onClick={plus_project}>Add Project</Button>
                            <div className={styles.educationfield}>
                                {[...Array(Project)].map((el, i) => (<Projects key={i} val={i} setProject={setProject} />))}
                            </div>
                        </CardContent>
                    </div>
                    <div className={styles.Certificate}>
                        <h2>Enter Your Certifications</h2>
                        <CardContent>
                            <Button onClick={plus_certificate}>Add Certificate</Button>
                            <div className={styles.educationfield}>
                                {[...Array(Certificate)].map((el, i) => (<Certificates key={i} val={i} setCertificate={setCertificate} />))}
                            </div>
                        </CardContent>
                    </div>
                </div>

                <div>
                    <Link className={styles.link} to="/work" element={<Work/>}><Button>Back</Button></Link>
                    <Button onClick={Submitvalues}>Submit</Button>
                    <div>{download && <Download_Link />}</div>
                </div>

            </div>

        </div>
    )
}

export default ProjectCertificate