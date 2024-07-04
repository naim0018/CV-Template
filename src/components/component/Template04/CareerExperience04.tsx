import { TExperience } from "../../../interface";



const CareerExperience04 : React.FC<TExperience> = ({exp}) => {
  const {
    title,
    startDate,
    endDate,
    currentlyWorking,
    workSummary,
  } = exp;
  return (
    <div className="py-5 odd:border-b-[1px] odd:border-b-[#B8623D]">
    <div className="flex items-center justify-between pb-2">
      <h4 className="text-lg text-[#CC9879] font-medium">{title}</h4>
      <p className="text-[#CC9879] font-medium">
        {startDate} - {currentlyWorking ? `Present` : endDate}
      </p>
    </div>
    <ul className="pl-1 list-none ">
      <li className="flex items-center justify-center gap-4">
        <p className=" bg-[#C98566]   h-[2px] w-4"></p>
        <p>{workSummary}</p>
      </li>
    </ul>
  </div>
  )
}

export default CareerExperience04