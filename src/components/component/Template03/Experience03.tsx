import { TExperience } from "../../../interface";


const Experience03 : React.FC<TExperience> = ({ exp }) => {
  const {
    title,
    startDate,
    endDate,
    currentlyWorking,
    workSummary,
  } = exp;
  return (
    <div className="py-5">
      <div className="flex items-center justify-between pb-2">
        <h4 className="text-lg text-lime-800">{title}</h4>
        <p className="text-lime-800">
          {startDate} - {currentlyWorking ? `Present` : endDate}
        </p>
      </div>
      <ul className="pl-1 list-none ">
        <li className="flex items-center justify-center gap-4">
          <p className=" bg-[#BFD1B3]   h-[2px] w-4"></p>
          <p>{workSummary}</p>
        </li>
      </ul>
    </div>
  );
};

export default Experience03;
