import ProgressUI from "../Shadcn/ProgressUI"

type TSkill = {
    id:number,
    name:string,
    rating:number
}
const AreasOfExpertise03 : React.FC<{skill:TSkill}> = ({skill}) => {
    const {name,rating} = skill
  return (
    <div>
        <div className="text-lime-800 space-y-2">
            <p className="font-medium">{name}</p>
            <ProgressUI skill ={rating}/>
        </div>
    </div>
  )
}

export default AreasOfExpertise03