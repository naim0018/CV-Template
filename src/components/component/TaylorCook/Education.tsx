
const Education = ({education}) => {
    const {universityName,startDate,endDate,degree,major,currentlyWorking,description} = education
  return (
    <div>
    <div className="flex items-start justify-between">
    <div className="">
      <h3 className='text-lg font-medium'>{universityName}</h3>
    <p>{startDate} - {endDate}</p>
    <span className="space-y-2">
    <p className="font-medium">{major}</p>
    <p className="text-black/60">{description}</p>
    </span>
    </div>
      <p className="w-full text-end font-medium">{degree}</p>
  </div>
    </div>
  )
}

export default Education