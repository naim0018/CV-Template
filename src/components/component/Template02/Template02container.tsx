
import { resumeData } from "../../../lib/json";
import UserInfo from "./UserInfo";
import Title from "./Title";
import Experience from "./Experience";
import Education from "./Education";

const Template02container = () => {
  const { personalInfo, summary, experience, education } = resumeData;
  return (
    <div className="max-w-[1220px] mx-auto p-10 space-y-14">
      {/* Heading */}
      <div className="flex items-center justify-between">
        <span className="space-y-2">
          <h1 className="text-5xl font-semibold">
            {personalInfo.firstName} {personalInfo.lastName}
          </h1>
          <p className="font-medium">{personalInfo.jobTitle}</p>
        </span>
        <p className="h-6 w-6 bg-black"></p>
      </div>
      {/* User Info */}
        <div className="">
            <UserInfo personalInfo={personalInfo}/>
        </div>
        {/* Profile */}
        <div className="grid grid-cols-4">
            <Title title={'Profile'}/>
            <p className="col-span-3 font-medium">{summary}</p>
        </div>
        {/* Employment History */}
        <div className="space-y-5">
            <Title title={'Employment History'}/>
            <div className="space-y-5">
                {
                    experience.map(exp=> <Experience exp={exp}/>)
                }
            </div>
        </div>
        {/* Education  */}
        <div className="space-y-5">
            <Title title={'Education'}/>
            <div className="space-y-5">
                {
                    education.map(edu=><Education edu={edu}/>)
                }
            </div>
        </div>
    </div>
  );
};

export default Template02container;
