

const EmploymentHistory = ({experienceData}) => {
    const {title,companyName,city,state,startDate,endDate,currentlyWorking,workSummary} = experienceData
  return (
    <div className="space-y-5">
    <div className="space-y-5">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
            <span className=" space-y-1">
          <h3 className="text-lg font-medium">
           {companyName}
          </h3>
          <h4>{title}</h4>
            </span>
            {/* Work Status */}
          <p>{startDate} -  {currentlyWorking ? 'Present' : endDate}</p>
        </div>

        <p>{city},{state}</p>
      </div>
      {/* Work Details */}
      <ul className="list-disc pl-10">
       <li>{workSummary}</li>
      </ul>
    </div>
    
  </div>
  )
}

export default EmploymentHistory