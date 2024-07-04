import { resumeData } from "../../../lib/json";
import Body10 from "./Body10";
import Header10 from "./Header10"


const Template10Container  = () => {
    const { personalInfo } = resumeData;
  return (
    <div className="px-10">
        {/* Header */}
        <div className="py-8">
            <Header10 personalInfo={personalInfo}/>
        </div>
        <hr className="border-b-[1px] border-black"/>
        {/* Body */}
        <div className="">
            <Body10/>
        </div>
    </div>
  )
}
export default Template10Container