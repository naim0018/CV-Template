import { resumeData } from "../../../lib/json"

const LeftSection13 = () => {
  const {firstName,lastName,jobTitle,address,phone,email} = resumeData.personalInfo
  const {summary,skills} = resumeData
  return (
    <div>
        <h1>{firstName} <br />{lastName}</h1>
        <h4>{jobTitle}</h4>
        <p>{summary}</p>

        {/* Contact */}
        <div className="">
          <h5>Contacts</h5>
          <p>{address}</p>
          <p>{email}</p>
          <p>LinkedIn</p>
          <p>Portfolio</p>
          <p>{phone}</p>
        </div>
        {/* Skills */}
        <div className="">
          <h5>Skills</h5>
          {
            skills.map(skill=>(<p key={skill.id}>{skill.name}</p>))
          }
        </div>
        <div className="">
          <h5>Tools</h5>
          <p>Github,Chrome Dev Tools & Figma</p>
        </div>
    </div>
  )
}
export default LeftSection13