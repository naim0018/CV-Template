import { resumeData } from "../../../lib/json";
import Education07 from "./Education07";
import EmploymentHistory07 from "./EmploymentHistory07";
import Header07 from "./Header07"
import Skills07 from "./Skills07";
import Title07 from "./Title07";

const Template07Container = () => {
    const { personalInfo, summary, experience, education,skills } = resumeData;
  return (
    <div className="max-w-[1220px] mx-auto py-10 space-y-2">
        {/* Header  */}
        <div className="">
            <Header07 personalInfo={personalInfo}/>
        </div>
        <hr className="border-b-[1px] border-black"/>
        {/* Profile */}
        <div className="space-y-5 py-2">
            <Title07 title={'Profile'}/>
            <p>{summary}</p>
        </div>
        <hr className="border-b-[1px] border-black"/>
        {/* Employment History */}
        <div className="pt-2">
            <Title07 title={'Employment History'}/>
            <div className="space-y-5">
                {
                    experience.map(exp =><EmploymentHistory07 key={exp.id} exp={exp}/>)
                }
            </div>
        </div>
        {/* Education  */}
        <div className="pt-2">
            <Title07 title={'Education'}/>
<div className="space-y-5 py-5">
    {
        education.map(edu=><Education07 key={edu.id} edu={edu}/>)
    }
</div>
        </div>
        {/* Skills */}
        <div className="">
            <Title07 title={'Skills'}/>
            <div className=" grid grid-cols-2 gap-x-20 gap-y-2 py-5">
                {
                    skills.map(skill=><Skills07 key={skill.id} skill={skill}/>)
                }
            </div>
        </div>
    </div>
  )
}
export default Template07Container