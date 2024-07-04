import ProgressUI from "../Shadcn/ProgressUI"

type TSkill = {
  id:number,
  name:string,
  rating:number
}
const Skills05: React.FC<{skill:TSkill}>  = ({skill}) => {
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