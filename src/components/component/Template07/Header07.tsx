import { TPersonalInfo } from "../../../interface"

const Header07:React.FC<TPersonalInfo> = ({personalInfo}) => {
    const {firstName,lastName,address,phone,email,jobTitle} = personalInfo
  return (
    <div className="space-y-2">
        <div className="text-center space-y-2">
            <h1 className="text-4xl">{firstName} {lastName}</h1>
            <p className="text-lg">{jobTitle}</p>
            <p className="text-sm">{address}</p>
        </div>
        <div className="flex items-center justify-between font-medium">
            <p>{phone}</p>
            <p>{email}</p>
        </div>
    </div>
  )
}
export default Header07