

interface PersonalInfo {
    address: string,
    phone: string,
    email: string
  }
  
  interface UserInfoProps {
    personalInfo: PersonalInfo
  }
  
const UserInfo: React.FC<UserInfoProps> = ({personalInfo}) => {
  return (
    <div className="grid grid-cols-2 items-start  gap-x-20 gap-y-10">
    <div className=" flex items-start justify-between space-x-28 ">
      <h3 className="flex-grow font-medium">Address</h3>
      <p className="flex-grow">{personalInfo.address}</p>
    </div>
    <div className="flex items-start justify-start space-x-28 " >
      <h3 className="flex-grow font-medium">Phone</h3>
      <p className="flex-grow">{personalInfo.phone}</p>
    </div>
    <div className="flex items-start justify-start space-x-28 ">
      <h3 className="flex-grow font-medium">Email</h3>
      <p className="flex-grow">{personalInfo.email}</p>
    </div>
  </div>
  )
}

export default UserInfo