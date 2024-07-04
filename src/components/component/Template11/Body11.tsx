interface Experience {
  exp: {
    title: string;
    startDate: string;
    endDate?: string;
    currentlyWorking: boolean;
    workSummary: string;
  };
}

const Body11: React.FC<Experience> = ({ exp }) => {
  const { workSummary } = exp;
  return (
    <div>
      <p>{workSummary}</p>
    </div>
  );
};
export default Body11;
