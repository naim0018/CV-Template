interface Experience {
  exp: {
    title: string;
    startDate: string;
    endDate?: string;
    currentlyWorking: boolean;
    workSummary: string;
  };
}

const EmploymentHistory05: React.FC<Experience> = ({ exp }) => {
  const { title, startDate, endDate, currentlyWorking, workSummary } = exp;
  return (
    <div className="space-y-2">
      <h4 className="text-xl">{title}</h4>
      <div className="flex items-center gap-2">
      <p>{startDate}</p>
        <p className="h-[1px] w-3 bg-black"></p>
        <p>{currentlyWorking ? 'Present' : endDate}</p>
      </div>
      <ul  className="list-disc pl-5">
        <li>
        <p>{workSummary}</p>
        </li>
      </ul>
    </div>
  );
};
export default EmploymentHistory05;
