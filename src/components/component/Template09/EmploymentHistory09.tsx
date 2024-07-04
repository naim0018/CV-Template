interface ExperienceProps {
  exp: {
      title:string,
    companyName: string,
    city: string,
    state: string,
    startDate: string,
    endDate?: string,
    currentlyWorking: boolean,
    workSummary: string
  }
}
const EmploymentHistory09: React.FC<ExperienceProps> = ({exp}) => {
  const {
    title,
    
    city,
    state,
    startDate,
    endDate,
    currentlyWorking,
    workSummary,
  } = exp;
  return (
    <div className="grid grid-cols-7 ">
      <div className="col-span-2 flex items-start justify-start ">
        <div className="flex items-center gap-2">

        <p>{startDate} </p>
        <p className="h-[1px] w-3 bg-black"></p>
        <p> {currentlyWorking?'Present': endDate}</p>
        </div>
      </div>
      <div className="col-span-5 space-y-2">
        <div className="flex items-start justify-between">
        <h3 className="text-lg font-medium">{title}</h3>
        <p>{city},{state}</p>
        </div>
        <ul className="list-disc pl-5">
        <li>
          <p>{workSummary}
          </p>
          </li>
        </ul>

      </div>
    </div>
  )
}
export default EmploymentHistory09