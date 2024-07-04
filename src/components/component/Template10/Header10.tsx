interface PersonalInfoProps {
  personalInfo: {
    firstName: string;
    lastName: string;
    jobTitle: string;
    address: string;
    phone: string;
    email: string;
  };
}

const Header10: React.FC<PersonalInfoProps> = ({ personalInfo }) => {
  const { firstName, lastName, address,jobTitle, phone, email } = personalInfo;
  return (
    <div>
      <div className="grid justify-center">
        <div className="flex items-end justify-center gap-1 text-2xl font-bold  py-2">
        <h1 className="">{firstName} {lastName},</h1>
        <h1 className="text-lg">{jobTitle}</h1>
        </div>
        <h4 className="text-center font-medium">{address}</h4>
        <div className="flex items-center justify-center gap-1 font-medium">
            <h4>{phone}</h4>
                <p className="h-[1px] w-3 bg-black "></p>
            <h4>{email}</h4>
        </div>
      </div>
    </div>
  );
};
export default Header10;
