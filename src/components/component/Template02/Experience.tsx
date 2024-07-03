

interface ExperienceProps {
    experience: {
      companyName: string,
      city: string,
      state: string,
      startDate: string,
      endDate?: string,
      currentlyWorking: boolean,
      workSummary: string
    }
  }
const Experience: React.FC<ExperienceProps> = ({experience}) => {
    const {companyName,city,state,startDate,endDate,currentlyWorking,workSummary} = experience
    
  return (
    <div className='grid grid-cols-4'>
        <p className='font-medium  '>{startDate} - {currentlyWorking ? `Present` : endDate}</p>
        <div className="col-span-3 space-y-3">
            <div className="flex items-start justify-between">
            <h3 className='text-lg font-bold'>{companyName}</h3>
            <p className='font-medium text-black/80'>{city},{state}</p>
            </div>
            <ul className='list-disc pl-8'>
                <li className=' font-medium'>{workSummary}</li>
            </ul>
        </div>
    </div>
  )
}

export default Experience