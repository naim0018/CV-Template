import { TSkill } from "../../../interface"

const Skills07:React.FC<TSkill> = ({skill}) => {
const {name} = skill
  return (
    <div>
        <div className="flex items-end justify-between">
            <p className="pr-2">{name}</p>
            <hr className="border border-dashed border-black  flex-grow"/>
            <p className="pl-3">Expert</p>
        </div>
    </div>
  )
}
export default Skills07