import SkillListItem from "../SkillListItem/SkillListItem";

export default function SkillList({skillList, index}) {
    const skillsLi = skillList.map((item, idx) => {
        return (<SkillListItem key={idx} skill={item} index={idx}/>)
    })
    
    return (
        <ul>
            {skillsLi}
        </ul>
    )
}