import { TSkill } from "../../../interface"

const AreasOfExpertise06:React.FC<TSkill> = ({skill}) => {
  const {name} = skill
  return (
    <div>
      <ul className=""><li className="flex items-center gap-5"><p className="h-2 w-2 bg-blue-500 rounded-full"></p><p>{name}</p></li></ul>
    </div>
  )
}
export default AreasOfExpertise06