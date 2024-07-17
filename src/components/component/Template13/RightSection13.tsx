import { resumeData } from "../../../lib/json"

const RightSection13 = () => {
  const exp = resumeData.experience

  return (
   <div className="">
    <h5>Experience</h5>
    {
      exp.map(exp=>{
        const {title,companyName,city,state,startDate,endDate,currentlyWorking,workSummary} = exp
        return(
          <div className="space-y-2">
          <h4 className="text-xl">{title}</h4>
          <div className="flex items-center gap-2">
            <p>{companyName},</p>
          <p>{startDate}</p>
            <p className="h-[1px] w-3 bg-black"></p>
            <p>{currentlyWorking ? 'Present' : endDate}</p>
          </div>
          <ul  className="list-disc pl-5">
            <li>
            <p>{workSummary}</p>
            </li>
          </ul>
        </div>
        )
      })
    }
   </div>
  )
}
export default RightSection13