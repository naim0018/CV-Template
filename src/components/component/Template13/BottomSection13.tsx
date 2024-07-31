import { resumeData } from "../../../lib/json"

const BottomSection13 = () => {
    const edu = resumeData.education
         

  return (
    <div className="flex justify-between max-w-[564px]">
      <div className="">
      <h5 className="text-[#0E6CC2] text-[10px] font-bold">Education & Learning</h5>
      {
        edu.map(edu=>{
          const {universityName,degree,startDate,endDate,currentlyStudying} = edu
          return (
            <div>
              <p className="text-[10px] font-bold">{degree}</p>
              <h4 className="w-[200px] text-[#222222] text-[10px] font-normal font-['Poppins'] leading-[17px]">{universityName}</h4>
              <div className="flex items-center gap-2 w-[200px] text-[#222222] text-[10px] font-normal font-['Poppins'] leading-[17px]">
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
        <h5 className="w-[200px] text-[#0d6bc2] text-[10px] font-bold font-['Poppins'] leading-[14px]">Projects</h5>
        <p className="text-[#222222] text-[9px] font-bold font-['Poppins'] leading-[14px]">FundedNext [https://fundednext.com/]</p>
        <p className="w-[245px] text-[#222222] text-[10px] font-normal font-['Poppins'] leading-[15px]">Built FundedNext's captivating dashboard (React, Node) & secured payments with Stripe.</p>
      </div>
    </div>
  )
}
export default BottomSection13