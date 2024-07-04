import { TSkill } from "../../../interface"

const Skills09 : React.FC<TSkill> = ({skill}) => {
    const {name,rating} = skill
  return (
    <div className=" flex items-center justify-between">
        <p>{name}</p>
        <p>{rating}</p>
    </div>
  )
}
export default Skills09