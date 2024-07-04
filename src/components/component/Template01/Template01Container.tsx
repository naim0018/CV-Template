
import Title from "./Title";
import Details from "./Details";
import Skills from "./Skills";
import Languages from "./Languages";
import EmploymentHistory from "./EmploymentHistory";
import Education from "./Education";
import { resumeData } from "../../../lib/json";


const Template01Container = () => {
const {personalInfo,summary,experience,education,skills}= resumeData

  return (
    <div className="max-w-[1220px] mx-auto p-10">
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
          <div className="space-y-2">
          <Title title={"Skills"}/>
          <div className="space-y-4 ">
          {
            skills.map(skill=><Skills key={skill.id} skill={skill}/>)
          }
          </div>
          </div>
          
          {/* Language */}
         <Languages/>
        </div>
        {/* Right */}
        <div className="col-span-3 pt-10 pl-10 space-y-10">
          {/* Profile */}
          <div className="space-y-2">
            <Title title={"Profile"} />
            <p className=" pb-10 ">
            {summary}
            </p>
          </div>
          <hr className="border-b-[2px]"/>
          {/* Employment History  */}
          <div className="space-y-2">
          <Title title={"Employment History"} />
          <div className="space-y-10">
          {
            experience.map(exp =><EmploymentHistory key={exp.id} exp={exp}/>)
          }
          </div>

          </div>
          <hr className="border-b-[2px]"/>
          {/* Education */}
          <div className="space-y-2">
          <Title title={'Education'}/>
          <div className="space-y-5">
          {
            education.map(edu => <Education key={edu.id} edu ={edu}/>)
              
          }
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template01Container;
