import { RiBriefcase5Line } from "react-icons/ri";
import { resumeData } from "../../../lib/json";
import { SlCalender } from "react-icons/sl";
import { IoBookOutline } from "react-icons/io5";

const Template12Container = () => {
  const { personalInfo,summary,experience,skills,education } = resumeData;
  const { firstName, lastName, jobTitle, email } = personalInfo;
  return (
    <div className="w-[595px]  mx-auto px-6 pt-5">
      <img src="https://i.ibb.co/1QsK8yS/G2-Esports-drops-CSGO-legend-kenny-S.jpg" alt="" className="size-20"/>
      {/* PersonalInfo */}
      <div className="flex items-center justify-between w-[535.85px]">
        <div className="my-2">
          <h4 className="text-base font-bold  capitalize leading-normal text-[#2d3e5b]">
            {firstName} {lastName}
          </h4>
          <h6
            className="text-xs font-extrabold text-[#6d61f1] ">
            {jobTitle}
          </h6>
        </div>
        <div className="text-[#242424] text-[10.60px] font-light underline flex items-center gap-5">
        <div className="underline ">
          <p className="">{email}</p>
          <p className=" ">www.imkamrul.com/</p>
        </div>
        <div className="underline">      
          <p className="">linkedin.com/in/imkamrul98</p>
          <p className="">github.com/imkamrul/</p>
        </div>
        </div>
      </div>
      <p className="w-[535.85px] p-3 bg-[#F7F8F8] rounded-md text-[#242424 ] text-[11px] font-normal  leading-none
      tracking-tight mb-2">{summary}</p>

{/* Experience */}
      <div className="py-2"> 
        <h5 className="text-[#6d61f1] text-xs font-extrabold  uppercase py-2">Experience</h5>
        <div className="space-y-2">
          {
             experience.map(exp=>{
              const {title,companyName,startDate,endDate,workSummary,currentlyWorking}  = exp
              return(
                <div className="">
                  <div className="flex items-center justify-between">
                    <h5 className="text-[#2d3e5b] text-[13px] font-bold py-1">{title}</h5>
                    <p className="flex items-center gap-1 text-[#242424] text-[10.60px] font-medium"><RiBriefcase5Line />{companyName}</p>
                    <p className="flex items-center gap-1 text-[#242424] text-[10.60px] font-medium"><SlCalender />
                    {startDate} - {currentlyWorking ? "Currently" : endDate }</p>
                  </div>
                  <div className="">
                    <ul className="list-disc pl-3">
                      <li className="text-[8px] "><p className="text-[#242424] text-[11px] font-normal leading-[18.70px] pb-2">{workSummary}</p></li>
                    </ul>
                  </div>
                  <hr className="border-b-[1.5px]  border-[#ececec]"/>
                </div>
              )
             }) 
          }
        </div>

      </div>

      {/* Skills */}
      <div className=" py-2">
          <h4 className="text-[#6d61f1] text-xs font-extrabold uppercase py-2">Skills</h4>
          <div className="space-y-1">
          {
            skills.map(skill=>{
              const {name}=skill
              return(
                <div className="">
                    <p className="text-[#242424] text-[11px] font-normal leading-[14.84px]">{name}</p>
                </div>
              )
            })
          }
          </div>
      </div>
 <hr className="border-b-[1.5px]  border-[#ececec]"/>
      {/* Projects */}
      <div className="py-2">
        <h4 className="text-[#6d61f1] text-xs font-extrabold  uppercase py-2">Projects</h4>
        <div className="">
          {
            <div className="">
              <h5 className="text-[#2d3e5b] text-[13px] font-semibold">FundenNext(fundednext.com)</h5>
              <p className="text-[#242424] text-[11px] font-normal">Built FundedNext's captivating dashboard (React, Node) & secured payments with Stripe.</p>
            </div>
          }
        </div>
      </div>
      <hr className="border-b-[1.5px]  border-[#ececec]"/>
      {/* Education */}
      <div className="py-2">
        <h4 className="text-[#6d61f1] text-xs font-black uppercase py-2">EDUCATION</h4>
        <div className="space-y-2">
          {
            education.map(edu=>{
              const {major,universityName,endDate} = edu
              return(
                <div key={edu.id} className="">
                  <h5 className="text-[#2d3e5b] text-[13px] font-semibold">{major}</h5>
                  <div className="flex items-center gap-16">
                  <p className="text-[#242424] text-[10.60px] font-light flex items-center gap-[2px]"><IoBookOutline className=""/>{universityName}</p>
                  <p className="text-[#242424] text-[10.60px] font-light flex items-center gap-[2px]"><RiBriefcase5Line />{endDate}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <hr className="border-b-[1.5px]  border-[#ececec]"/>
      {/* Language */}
      <div className="py-2">
        <h4 className="text-[#6d61f1] text-xs font-extrabold uppercase py-2">Language</h4>
          <div className="">
            {
             <ul className="list-disc pl-3"><li className="text-[8px]"><p className="text-[#242424] text-[11px] font-normal">English</p></li></ul>
            }
          </div>
      </div>
      <hr className="border-b-[1.5px]  border-[#ececec]"/>
    </div>
  );
};
export default Template12Container;
