import Multiplecomp from './components/education/Multiplecomp';
import './App.css';
import Cards from './components/Card/Card';
import Button from '@mui/material/Button';
import React,{useContext, useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Globalcontext } from './context/context';
import Download_Link from './components/Generate_CV/Download_Link';
import Select from './components/Select/Select';
import Workcomponent from './components/work/Workcomponent';
import ProjectCertificate from './components/ProjectCertificate/ProjectCertificate';

function App() {
  const {cv_info,setcv_info,names,email,education} = useContext(Globalcontext)

  useEffect(()=>{
    console.log(cv_info)
  },[cv_info])

  function Submitvalues () {
    setcv_info(
        {names,email,education}
    )
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Cards/>} />
        <Route path="/education" element={<Multiplecomp />} />
        <Route path="/pdf" element={<Download_Link />} />
        <Route path="/selectskills" element={<Select/>} />
        <Route path="/work" element={<Workcomponent/>} />
        <Route path="/ProCer" element={<ProjectCertificate/>} />
      </Routes>
      
    </div>
  );
}

export default App;
