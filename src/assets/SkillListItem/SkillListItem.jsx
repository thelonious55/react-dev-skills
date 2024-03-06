import './SkillListItem.css'


export default function SkillListItem({skill}) {
    return (
        <li className='SkillListItem'>
            {skill.name}
            <div className='level'>{skill.level}</div>
        </li>
    )
}