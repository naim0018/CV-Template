import { resumeData } from "../../../lib/json"

const BottomSection13 = () => {
    const edu = resumeData.education

  return (
    <div className="flex items-center justify-between">
      <div className="">
      <h5>Education</h5>
      {
        edu.map(edu=>{
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
        })
      }
      </div>
      <div className="">
        <h5>Projects</h5>
      </div>
    </div>
  )
}
export default BottomSection13