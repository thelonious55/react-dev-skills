import { useState } from 'react'
import Form from "../Form/Form"
import './NewSkillForm.css'

export default function NewSkillForm(handleAddSkill) {
    
    const [name, setName] = useState({
        name: '',
        level: 3
    })
    
    
    return (
        <Form handleAddSkill={handleAddSkill}/>
    )
}