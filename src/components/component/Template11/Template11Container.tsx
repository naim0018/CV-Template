import { resumeData } from "../../../lib/json"
import AddressSection11 from "./AddressSection11"
import Body11 from "./Body11"
import Header11 from "./Header11"

const Template11Container = () => {
  const { personalInfo, experience } = resumeData
  return (
    <div className="p-10 ">
      <div className="">
        <Header11 personalInfo = {personalInfo}/>
      </div>
        <div className="grid grid-cols-4 gap-14">
          {/* Body */}
          <div className="col-span-3 py-16">
          {
            experience.map(exp=><Body11 key={exp.id} exp={exp}/>)
          }
          </div>
          {/* Address Section  */}
          <div className="pt-20">
          <AddressSection11 personalInfo = {personalInfo}/>
          </div>
        </div>
    </div>
  )
}

export default Template11Container