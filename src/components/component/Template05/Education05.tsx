type EducationProps = {
  edu: {
    universityName: string,
    startDate: string,
    endDate?: string,
    degree: string,
    major: string,
    currentlyStudying: boolean,
    description?: string
  }
}
const Education05 : React.FC<EducationProps>= ({edu}) => {
  const {universityName,degree,major,startDate,endDate,currentlyStudying} = edu
  return (
    <div>
      <h4 className="text-lg ">{universityName}</h4>
      <div className="flex items-center gap-2">
      <p>{degree}</p>
      <p className="h-[1px] w-3 bg-black"></p>
      <p>{major}</p>
      </div>
      <div className="flex items-center gap-2">
        <p>{startDate}</p>
        <p className="h-[1px] w-3 bg-black"></p>
        <p>{currentlyStudying? "Present" : endDate}</p>
      </div>
    </div>
  )
}
export default Education05