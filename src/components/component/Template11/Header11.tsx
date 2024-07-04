import { TPersonalInfo } from "../../../interface";


const Header11 : React.FC<TPersonalInfo> = ({ personalInfo }) => {
  const { firstName, lastName, jobTitle} = personalInfo;
  return (
    <div className="">
      <h1 className="text-4xl font-medium text-center">
        {firstName} {lastName}
      </h1>
      <hr className="w-4 border-b-[2px] mx-auto my-4" />
      <p className="text-center uppercase text-xs font-medium font tracking-wider">{jobTitle}</p>
    </div>
  );
};

export default Header11;
