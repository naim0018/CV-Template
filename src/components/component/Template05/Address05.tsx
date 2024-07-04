interface PersonalInfoProps {
  firstName: string,
  lastName: string,
  jobTitle:string,
  address: string,
  phone: string,
  email: string
}
const Address05: React.FC<{ personalInfo: PersonalInfoProps }> = ({personalInfo}) => {
  const {address,phone,email} = personalInfo
  return (
    <div className="">
      <p className=" text-blue-700">Address</p>
      <p>{address}</p>
      <p className="text-blue-500 pt-5">Email</p>
      <p className="text-blue-500 underline">{email}</p>
      <p className="pt-5">Phone</p>
      <p className="">{phone}</p>
    </div>
  )
}
export default Address05