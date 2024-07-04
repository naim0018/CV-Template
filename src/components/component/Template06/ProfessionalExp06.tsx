import { TExperience } from "../../../interface";

const ProfessionalExp06: React.FC<TExperience> = ({ exp }) => {
  const { title,city,state, startDate, endDate, currentlyWorking, workSummary } = exp;
  return <div>
    <div className="text-[#4E7EC9] flex items-end justify-between" >
        <div className="">
        <h4 className="text-lg">{title}</h4>
        <p>{state}, {city}</p>
        </div>
        <div className="flex items-center gap-1">
            <p>{startDate}</p>
            <p className="h-[1px] w-3 bg-blue-500"></p>
            <p>{currentlyWorking? "Present":endDate}</p>
        </div>
    </div>
    <div className="">
        <ul className="list-disc pl-5"><li><p>{workSummary}</p></li></ul>
    </div>
  </div>;
};
export default ProfessionalExp06;
