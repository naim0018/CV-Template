import { resumeData } from "../../../lib/json"

const RightSection13 = () => {
  const exp = resumeData.experience

  return (
   <div className="w-[363px] ">

    {
      exp.map(exp=>{
        const {title,companyName,startDate,endDate,currentlyWorking,workSummary} = exp
        return(
          <div className="space-y-2 pb-[30px] ">
          <h4 className="text-xs font-bold">{title}</h4>
          <div className="flex items-center gap-2 text-[#0E6CC2] text-[9px] font-semibold">
            <p>{companyName},</p>
          <p >{startDate}</p>
            <p className="h-[1px] w-2  bg-[#0E6CC2]"></p>
            <p>{currentlyWorking ? 'Present' : endDate}</p>
          </div>
          <ul  className="list-disc pl-5">
            <li className="text-[7px] rounded-full">
            <p className="text-[9px]">{workSummary}</p>
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