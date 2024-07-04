
import { resumeData } from "../../../lib/json";
import Header03 from "./Header03";
import Title03 from "./Title03";
import Experience03 from "./Experience03";
import Education03 from "./Education03";
import AreasOfExpertise03 from "./AreasOfExpertise03";

const Template03Container = () => {
  const { personalInfo, summary, experience, education,skills } = resumeData;
  return (
    <div className="max-w-[1220px] mx-auto p-10">
      {/* Header */}
      <div className="">
        <Header03 personalInfo={personalInfo} />
      </div>
      <div className="p-14 space-y-10">
        {/* Description */}
        <div className="space-y-5">
          <h4 className="text-2xl text-[#76995f]">{experience[0].title}</h4>
          <p className="">{summary}</p>
        </div>
        {/* Career Experience */}
        <div className="">
          <Title03 title={"Career Experience"} />
          <div className="">
            {
                experience.map(exp =><Experience03 key={exp.id} exp ={exp}/>)
            }
          </div>
        </div>
        {/* Education */}
        <div className="space-y-5">
            <Title03 title={'Education'}/>
            <div className="space-y-2">
                {
                    education.map(edu => <Education03 edu ={edu}/>)
                }
            </div>
        </div>
        {/* Areas of Expertise */}
        <div className="space-y-5">
            <Title03 title={'Areas of Expertise'}/>
            <div className="space-y-2">
                {
                    skills.map(skill=><AreasOfExpertise03 skill ={skill}/>)
                }
            </div>
        </div>
      </div>
    </div>
  );
};

export default Template03Container;
