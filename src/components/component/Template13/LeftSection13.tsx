import { resumeData } from "../../../lib/json"

const LeftSection13 = () => {
  const {firstName,lastName,jobTitle,address,phone,email} = resumeData.personalInfo
  const {summary,skills} = resumeData
  return (
    <div className="space-y-2">
        <h1 className="text-base font-bold">{firstName} <br />{lastName}</h1>
        <h4 className="text-sm font-bold text-[#0E6CC2]">{jobTitle}</h4>
        <p className="text-[9px] text-[#222] font-normal ">{summary}</p>

        {/* Contact */}
        <div className="">
          <h5 className="text-[#0E6CC2] text-[10px] font-semibold">Contacts</h5>
          <div className="text-[#222] text-[8px] font-medium w-[595px]">
          <p>{address}</p>
          <p>{email}</p>
          <p>LinkedIn</p>
          <p>Portfolio</p>
          <p>{phone}</p>
          </div>
        </div>
        {/* Skills */}
        <div className="">
          <h5 className="text-[10px] font-semibold text-[#0E6CC2]">Skills</h5>
          {
            skills.map(skill=>(<p className="text-[9px] text-[#222] font-normal" key={skill.id}>{skill.name}</p>))
          }
        </div>
        <div className="">
          <h5 className="text-[#0E6CC2] text-[10px] font-bold">Tools</h5>
          <p className="text-[9px] text-[#222] font-normal">Github,Chrome Dev Tools & Figma</p>
        </div>
    </div>
  )
}
export default LeftSection13