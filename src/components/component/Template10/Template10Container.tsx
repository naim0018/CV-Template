import { resumeData } from "../../../lib/json";
import Body10 from "./Body10";
import Header10 from "./Header10"


const Template10Container  = () => {
    const { personalInfo,summary } = resumeData;
  return (
    <div className="max-w-[1220px] mx-auto p-10">
        {/* Header */}
        <div className="py-8">
            <Header10 personalInfo={personalInfo}/>
        </div>
        <hr className="border-b-[1px] border-black"/>
        {/* Body */}
        <div className="">
            <Body10 summary={summary}/>
        </div>
    </div>
  )
}
export default Template10Container