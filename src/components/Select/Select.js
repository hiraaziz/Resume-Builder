import { Button, SliderValueLabel } from '@mui/material';
import React from 'react'
import { useState, useEffect, useContext } from 'react';
import styles from './styles.module.css'
import Multiplecomp from '../education/Multiplecomp'
import { Link } from 'react-router-dom';
import { Globalcontext } from '../../context/context';
import Card from '../Card/Card'

let selectOptions = [
  { value: 1, label: 'React js' },
  { value: 2, label: 'Angular' },
  { value: 3, label: 'DevOps' },
  { value: 4, label: 'AWS' },
  { value: 5, label: 'Databses' },
  { value: 6, label: 'Other' }
]
const Select = () => {

  const { skills,setskills } = useContext(Globalcontext)
  const [isOpen, setIsopen] = useState(false)
  const [value, setvalue] = useState([])
  const [input_Skill, setinputSkill] = useState([])
  const [highlight, sethighlight] = useState()
  const [Isinput, setinput] = useState(false)
  const [otherSkills, setotherSkills] = useState('')
  const [alert, setalert] = useState(false)


  function selectOption(option) {
    if (value.length >= 20 || skills.length >=20) {
      if (alert === false) setalert(prev => !prev)
    }
    else {
      if (option.label === 'Other') {
        if (Isinput === false) setinput(prev => !prev)
      }
      else {
        if (!value.includes(option)) {

          setvalue(oldvalue => [...oldvalue, option])
          let duplicate=true;
          skills.every(element => {
            duplicate = element.label === option.label? false: true
            if(duplicate === false) return false
            else return true
          });
          if(duplicate) setskills(oldvalue => [...oldvalue, option])
        }

      }
    }
  }

  function clearSingleValue(val) {

    setvalue(value.filter(vals => vals.label !== val))
    setskills(skills.filter(vals => vals.label !== val))

    if (alert) setalert(prev => !prev)
  }
 
  function IsOpenSelected(option) {
    return option === value[value.length - 1]
  }

  function handleKeyDown(e) {

    if (skills.length >= 20) {
      if (alert === false) setalert(prev => !prev)
    } else {
      if (e.key === 'Enter') {
        e.target.value = ""
        setskills(oldvalue => [...oldvalue, { value: skills[skills.length - 1].value + 1, label: otherSkills }])
      }
    }
  }

  function clearall(){
    
    setskills(skills.filter(vals => {
      const result = selectOptions.filter(val=> val.label === vals.label)
      if(result.length !== 0) return false
      else return true
    } ) )

  }

  return (
    <div className={styles.Select}>

      <h1>Select Your Skills</h1>

      <div className={styles.sectiontwo}>
        <div className={styles.selectcontainer}
          onClick={() => setIsopen(prev => !prev)}
          tabIndex={0} >

          <span className={styles.value}>
            {value?.map((val, ind) => (
              <div key={ind} className={styles.multivalue}>
                {val.label}
                <button
                  onClick={e => {
                    e.stopPropagation()
                    clearSingleValue(val.label)
                  }}
                  className={styles.singleclear}>&times;</button>
              </div>
            ))}
          </span>

          <button onClick={e => {
            e.stopPropagation()
            clearall()
            setvalue([])
            if (alert) setalert(prev => !prev)
          }}
            className={styles.clearbtn} >&times;</button>

          <div className={styles.divider}></div>

          <div className={styles.caret}></div>

          <ul className={`${styles.options} ${isOpen ? styles.show : ''}`}>
            {selectOptions.map((opt, ind) => (
              <li key={opt.label}
                onMouseEnter={() => sethighlight(ind)}
                className={`${styles.opt} ${IsOpenSelected(opt) ? styles.selected : ''} ${ind === highlight ? styles.highlighted : ''}`}
                onClick={e => {
                  selectOption(opt)
                }}>
                {opt.label}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.skills}>
          <span className={styles.value1}>
            {skills?.map((val, ind) => (
              <div key={ind} className={styles.multivalue}>
                {val.label}
                <button
                  onClick={e => {
                    e.stopPropagation()
                    clearSingleValue(val.label)
                  }}
                  className={styles.singleclear}>&times;</button>
              </div>
            ))}
          </span>
        </div>
      </div>

      <div className={styles.sectionthree}>
        <input className={`${styles.otherinput} ${Isinput ? styles.show : ''}`}
          onChange={event => setotherSkills(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter skills"
        />
        <div className={`${styles.redalert} ${alert ? styles.show : ''}`}>Only 20 skills can be added</div>
      </div>

      <div>
          <Link className={styles.link} to="/" element={<Card/>}><Button>Back</Button></Link>
          <Link className={styles.link} to="/education" element={<Multiplecomp />}><Button>Next</Button></Link>
      </div>
    

    </div>
  )
}

export default Select