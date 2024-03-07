import { useState } from 'react'




export default function Form(handleAddSkill) {

    const [skill, setSkill] = useState('')

    function handleChange(e) {
        setSkill(e.target.value)
        console.log(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()

        handleAddSkill(skill)
    }



    return (
        <form className="NewSkillForm" onSubmit={handleSubmit}>
            <label htmlFor="">Skill</label>
            <input type="text" value={skill.name} onChange={handleChange} />
            <label htmlFor="" className="level">Level</label>
            <select name="" value={skill.level} id="">
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <button>Add Skill</button>
        </form>

    )
}