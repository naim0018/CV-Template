import { TPersonalInfo } from "../../../interface"


const Header04 : React.FC< TPersonalInfo > = ({personalInfo}) => {
  const {firstName,lastName,jobTitle,address,phone,email} = personalInfo
  return (
    <div className="flex items-end justify-between">
      <div className="">
        <h1 className="text-4xl font-medium text-[#C98566]">{firstName} {lastName}</h1>
        <p className="text-lg font-medium text-[#CC9879]">{jobTitle}</p>
      </div>
      <div className="text-[#CC9879] font-medium text-start">
        <div className="flex items-center gap-1">
        <p>{email}</p>
        <span className="h-1 w-1 rounded-full bg-[#CC9879]"></span>
        <p>{phone}</p>
        </div>
        <p>{address}</p>
      </div>
    </div>
  )
}

export default Header04