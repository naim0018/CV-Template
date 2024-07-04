import { resumeData } from "../../../lib/json"
import CareerExperience04 from "./CareerExperience04";
import Education04 from "./Education04";
import Header04 from "./Header04"
import Title04 from "./Title04";

// #CC9879
// #C98566
// #B8623D

const Template04Container = () => {
    const { personalInfo, summary, experience, education } = resumeData;
  return (
    <div className="max-w-[1220px] mx-auto p-10 space-y-10">
        {/* Header */}
        <div className="">
            <Header04 personalInfo={personalInfo}/>
        </div>
        {/* Summary */}
        <div className="">
            <p className="font-medium">{summary}</p>
        </div>
        {/* Career Experience */}
        <div className="">
            <Title04 title={'Career Experience'}/>
            <div className="">
                {
                    experience.map(exp => <CareerExperience04 exp={exp}/>)
                }
            </div>
        </div>
        {/* Education */}
        <div className="">
            <Title04 title={'Education'}/>
            <div className="">
                {
                    education.map(edu=><Education04 edu={edu}/>)
                }
            </div>
        </div>
        {/* Technical Proficiencies */}
        <div className="">
            <Title04 title={'Technical Proficiencies'}/>
            <div className="pt-5  space-y-3 font-medium">
                <p className="border-b-[1px] border-[#B8623D] pb-3">Adaptability</p>
                <p className="border-b-[1px] border-[#B8623D] pb-3">Effective Time Management</p>
                <p>Interpersonal Skills</p>
            </div>
        </div>
    </div>
  )
}

export default Template04Container