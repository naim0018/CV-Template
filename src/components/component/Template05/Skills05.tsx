import { TSkill } from "../../../interface"
import ProgressUI from "../Shadcn/ProgressUI"


const Skills05: React.FC<TSkill>  = ({skill}) => {
  const {name,rating} = skill
  return (
    <div className=" grid grid-cols-2 items-center gap-10 ">
      <p className="">{name}</p>
      <div className="">
      <ProgressUI skill={rating} width={'100%'}/>
      </div>
    </div>
  )
}
export default Skills05