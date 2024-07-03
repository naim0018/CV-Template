import React from "react";
import Title from "./Title";
import Details from "./Details";
import Skills from "./Skills";
import Languages from "./Languages";
import EmploymentHistory from "./EmploymentHistory";
import Education from "./Education";
import { resumeData } from "../../../lib/json";
import { profile } from "console";


const TaylorCookContainer = () => {
const {personalInfo,summary,experience,education,skills}= resumeData

  return (
    <div className="p-20">
      {/* Top */}
      <div className="space-y-4 pb-8 border-b-[3px] ">
        <h1 className="text-6xl font-medium tracking-widest uppercase">
          {personalInfo.firstName} <br />
          {personalInfo.lastName}
        </h1>
        <p className="text-black/50 font-medium">{personalInfo.jobTitle}</p>
      </div>
      <div className=" pr-4 grid grid-cols-5 items-start justify-center ">
        {/* left */}
        <div className=" pt-10 h-full border-r-[3px] col-span-2 space-y-10">
          {/* Details */}
          <div className="">
          <Title title={"Details"} />
            {
            <Details personalInfo={personalInfo}/>
            }
          </div>
          {/* Skills */}
          <div className="space-y-3 ">
          <Title title={"Skills"}/>
          {
            skills.map(skill=><Skills key={skill.id} skill={skill}/>)
          }
          </div>
          
          {/* Language */}
         <Languages/>
        </div>
        {/* Right */}
        <div className="col-span-3 pt-10 pl-10 space-y-10">
          {/* Profile */}
          <div className="space-y-2">
            <Title title={"Profile"} />
            <p className=" pb-10 border-b-[3px] border-black/10">
            {summary}
            </p>
          </div>
          {/* Employment History  */}
          <div className="space-y-2">
          <Title title={"Employment History"} />
          <div className="space-y-10">
          {
            experience.map(experienceData =><EmploymentHistory key={experienceData.id} experienceData={experienceData}/>)
          }
          </div>

          </div>
          {/* Education */}
          <div className="space-y-5">
          <Title title={'Education'}/>
          <div className="space-y-5">
          {
            education.map(edu => <Education education ={edu}/>)
              
          }
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaylorCookContainer;
