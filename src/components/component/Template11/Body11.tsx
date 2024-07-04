import { TExperience } from "../../../interface";


const Body11: React.FC<TExperience> = ({ exp }) => {
  const { workSummary } = exp;
  return (
    <div>
      <p>{workSummary}</p>
    </div>
  );
};
export default Body11;
