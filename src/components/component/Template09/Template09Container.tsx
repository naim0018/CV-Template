import { resumeData } from "../../../lib/json"
import Education09 from "./Education09"
import EmploymentHistory09 from "./EmploymentHistory09"
import Header09 from "./Header09"
import Profile09 from "./Profile09"
import Reference09 from "./Reference09"
import Skills09 from "./Skills09"
import Title09 from "./Title09"

const Template09Container = () => {
    const { personalInfo, summary, experience, education,skills } = resumeData;
    return (
        <div className="p-10 space-y-5">
            {/* Header */}
            <div className="">
                <Header09 personalInfo={personalInfo}/>
            </div>
            <hr className="border-b-[1px] border-black"/>
            {/* Profile */}
            <div className="">
                <Profile09 summary ={summary}/>
            </div>
            <hr className="border-b-[1px] border-black"/>
            {/* Employment History */}
            <div className="space-y-5">
                <Title09 title={'Employment History'}/>
                <div className="space-y-3">
                {
                    experience.map(exp=><EmploymentHistory09 exp={exp}/>)
                }
                </div>
               
            </div>
            <hr className="border-b-[1px] border-black"/>
            {/* Education */}
            <div className="space-y-5">
                <Title09 title={'Education'}/>
                <div className="space-y-2">
                    {

                        education.map(edu => <Education09 edu={edu}/>)
                
                    }
                </div>
            </div>
            <hr className="border-b-[1px] border-black"/>
            {/* Skills */}
            <div className="grid grid-cols-7">
                <div className="col-span-2">
                <Title09 title={'Skills'}/>
                </div>
                <div className="col-span-5 grid grid-cols-2 items-center gap-5 gap-x-20">
                    {   
                       skills.map(skill=><Skills09 skill={skill}/>) 
                    }
                </div>
            </div>
            <hr className="border-b-[1px] border-black"/>
            {/* Reference */}
            <div className="grid grid-cols-7  ">
                <div className="col-span-2 ">
                <Title09 title={'References'}/>
                </div>
                <div className="col-span-5 space-y-5">
                <Reference09 reference={personalInfo} />
                <Reference09 reference={personalInfo} />
                <Reference09 reference={personalInfo} />
                </div>
            </div>
        </div>
    )
}
export default Template09Container