import Select from "../Select/Select"

export default function Form() {
    return (
        <form className="NewSkillForm">  
             <label htmlFor="">Skill</label>
             <input type="text" />
            <label htmlFor="" className="level">Level</label>
             <Select />
            <button>Add Skill</button>
        </form>
        
    )
}