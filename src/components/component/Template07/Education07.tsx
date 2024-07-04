import { TEducation } from "../../../interface"

const Education07:React.FC<TEducation> = ({edu}) => {
    const {universityName,degree,major,startDate,endDate,currentlyStudying} = edu
  return (
    <div>
        <div className="flex items-end justify-between">
            <h3 className="pr-2 font-medium">{universityName}</h3>
            <hr className="border border-dashed border-black  flex-grow"/>
            <div className="flex items-center gap-1 pl-3">
                <p>{startDate}</p>
                <p className="h-[1px] w-3 bg-black"></p>
                <p>{currentlyStudying? "Present":endDate}</p>
            </div>
        </div>
        <div className="flex">
            <p>{degree}, {major}</p>
        </div>
    </div>
  )
}
export default Education07