import  { useEffect, useState } from 'react'

const Progress = () => {
    const [progress, setProgress] = useState(13)
 
    useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500)
      return () => clearTimeout(timer)
    }, [])
  return (
    <div>
      <Progress value={progress} className="w-[60%]" />
    </div>
  )
}

export default Progress
