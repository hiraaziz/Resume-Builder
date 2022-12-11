import {useContext} from 'react'
import {PDFDownloadLink} from '@react-pdf/renderer'
import Documents from './Document'
import { Globalcontext } from '../../context/context'
import Button from '@mui/material/Button';
import styles from './cv.module.css'

const Download_Link = () => {

    const {cv_info} = useContext(Globalcontext)
    console.log(cv_info)

  return (
    <div >
        <PDFDownloadLink document={<Documents value={cv_info}/>} fileName="FORM" >
            {
              ({loading})=>(loading ? <Button className={styles.link}>Loading Document...</Button>:<Button className={styles.link}>Download</Button>)
            }
        </PDFDownloadLink>
    
      </div>
  )
}

export default Download_Link