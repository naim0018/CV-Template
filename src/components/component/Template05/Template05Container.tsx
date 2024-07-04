import { resumeData } from "../../../lib/json";
import Address05 from "./Address05";
import Education05 from "./Education05";
import EmploymentHistory05 from "./EmploymentHistory05";
import Skills05 from "./Skills05";

const Template05Container = () => {
  const { personalInfo, summary, experience, education, skills } = resumeData;
  return (
    <div className="max-w-[1212px] mx-auto p-10">
      {/* Header */}
      <div className="">
        <h1 className="text-4xl text-[#E8AA6D]">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <h4 className="text-lg">{personalInfo.jobTitle}</h4>
      </div>
      <div className="grid grid-cols-7 gap-20">
        {/* Left Section */}
        <div className="col-span-5 space-y-10 pt-10">
          {/* Profile */}
          <div className="space-y-5">
            <h3 className="text-2xl text-[#E8AA6D]">Profile</h3>
            <p>{summary}</p>
          </div>

          {/* Employment History */}
          <div className="space-y-5">
            <h3 className="text-2xl text-[#E8AA6D]">Employment History</h3>
            <div className="space-y-5">
              {experience.map((exp) => (
                <EmploymentHistory05 exp={exp} />
              ))}
            </div>
          </div>
          {/* Education */}
          <div className="space-y-5">
            <h3 className="text-2xl text-[#E8AA6D] pb-2">Education</h3>
            <div className="space-y-5">
              {education.map((edu) => (
                <Education05 edu={edu} />
              ))}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-span-2 my-20">
          <Address05 personalInfo={personalInfo} />
          {/* Skills */}
          <div className="pt-10">
            <h4 className="text-blue-700 pb-2">Skills</h4>
            <div className="space-y-2">
              {skills.map((skill) => (
                <Skills05 skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Template05Container;
