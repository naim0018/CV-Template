import React, { useEffect, useState } from 'react'
import { Progress } from '../../ui/progress'

interface ProgressUIProps {
    skill: number;
    width?:string
  }
const ProgressUI : React.FC<ProgressUIProps> = ({skill,width='60%'}) => {
    const [progress, setProgress] = useState(0)
 
 useEffect(() => {
    const timer = setTimeout(() => setProgress(skill), 500)
    return () => clearTimeout(timer)
  }, [skill])
  return (
    <Progress value={progress} className={`w-[${width}] h-2`} />
  )
}

export default ProgressUI