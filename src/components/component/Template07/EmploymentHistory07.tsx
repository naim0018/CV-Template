import { TExperience } from "../../../interface"

const EmploymentHistory07:React.FC<TExperience> = ({exp}) => {
    const { title,city,state, startDate, endDate, currentlyWorking, workSummary } = exp;
  return (
    <div className="">
        <div className="flex items-end justify-between pt-5">
            <h4 className="pr-2 font-medium">{title}</h4>
            <hr className=" border border-dashed border-black/50  flex-grow "/>
            <div className="pl-3 flex items-center gap-2">
                <p>{startDate}</p>
                <p className="h-[1px] w-2 bg-black"></p>
                <p>{currentlyWorking? 'Present':endDate}</p>
            </div>
        </div>
        <p className="text-end">{city}, {state}</p>
        <div className="pt-2">
            <ul className="list-disc pl-5"><li><p>{workSummary}</p></li></ul>
        </div>
            
    </div>
  )
}
export default EmploymentHistory07