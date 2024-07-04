type TSkill = {
  id:number,
  name:string,
  rating:number
}
const Skills05: React.FC<{skill:TSkill}>  = ({skill}) => {
  const {name,rating} = skill
  return (
    <div className="flex items-center justify-between">
      <p>{name}</p>
      <p>{rating}</p>
    </div>
  )
}
export default Skills05