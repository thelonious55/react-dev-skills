import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SkillList from './assets/SkillList/SkillList'
import NewSkillForm from './assets/NewSkillForm/NewSkillForm'




function App() {

  function handleAddSkill(skillInput) {
    setSkills([skillInput, ...skills])
  }


  const [skills, setSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ]);

  return(
    <>
    <h1>React Dev Skills</h1>
    <SkillList skillList={skills}/>
    <hr />
    <NewSkillForm handleAddSkill={handleAddSkill}/>
    </>
    
  )
  }
export default App
