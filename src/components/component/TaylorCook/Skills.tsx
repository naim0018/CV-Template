import React from 'react'
import ProgressUI from '../Shadcn/ProgressUI'

type TSkill ={
    id:number,
    name:string,
    rating:number
}
const Skills :React.FC<{skill:TSkill}> = ({skill}) => {
    const {name,rating}=skill
  return (
    <div className="space-y-2">
      <h3 className="font-semibold text-black/60">{name}</h3>
      <ProgressUI skill={rating} />
    </div>
 
  )
}

export default Skills