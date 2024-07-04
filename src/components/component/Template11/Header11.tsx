interface PersonalInfoProps {
  firstName: string,
  lastName: string,
  jobTitle:string,
  address: string,
  phone: string,
  email: string
}


const Header11 : React.FC<{ personalInfo: PersonalInfoProps }> = ({ personalInfo }) => {
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
