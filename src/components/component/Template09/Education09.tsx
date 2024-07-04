import { TEducation } from "../../../interface"

const Education09 : React.FC<TEducation> = ({edu}) => {
    const {universityName,degree,major, startDate,endDate,description ,currentlyStudying} = edu
  return (
    <div className="grid grid-cols-7 ">
    <div className="col-span-2 flex items-start justify-start ">
      <div className="flex items-center gap-2">

      <p>{startDate} </p>
      <p className="h-[1px] w-3 bg-black"></p>
      <p> {currentlyStudying?'Present': endDate}</p>
      </div>
    </div>
    <div className="col-span-5 space-y-2">
      <div className="flex items-start justify-between">
        <div className="">
      <h3 className="text-lg font-medium">{universityName}</h3>
      <p >{major}</p>
        </div>
      <p className="font-medium text-black/60">{degree}</p>
      </div>
      <ul className="list-disc pl-5"><li>
      <p className="">{description}</p>
        </li></ul>

    </div>
  </div>
  )
}
export default Education09