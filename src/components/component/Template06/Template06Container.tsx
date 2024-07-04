import { resumeData } from "../../../lib/json";
import AreasOfExpertise06 from "./AreasOfExpertise06";
import Education06 from "./Education06";

import Header06 from "./Header06"
import ProfessionalExp06 from "./ProfessionalExp06";
import Title06 from "./Title06";
// #4E7EC9
const Template06Container = () => {
    const { personalInfo, summary, experience, education,skills } = resumeData;
  return (
    <div className="max-w-[1220px] mx-auto space-y-10 py-10">
        {/* Header */}
        <div className="space-y-8">
        <Header06 personalInfo={personalInfo}/>
        <p>{summary}</p>
        </div>
        {/* Professional Experience */}
        <div className="space-y-5">
            <Title06 title={'Professional Experience'}/>
            <div className="space-y-5">
                {
                    experience.map(exp => <ProfessionalExp06 key={exp.id} exp={exp}/>)
                }
            </div>
        </div>
        {/* Education */}
        <div className="space-y-5">
            <Title06 title={'Education'}/>
            <div className="space-y-2">
                {
                    education.map(edu=><Education06 key={edu.id} edu={edu}/>)
                }
            </div>
        </div>
        {/* Areas of Expertise */}
        <div className="space-y-5">
            <Title06 title={'Areas of Expertise'}/>
            <div className="grid grid-cols-3">
                {
                    skills.map(skill => <AreasOfExpertise06 key={skill.id} skill={skill}/>)
                }
            </div>
        </div>
    </div>
  )
}
export default Template06Container