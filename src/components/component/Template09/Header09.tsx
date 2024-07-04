import { TPersonalInfo } from "../../../interface"


const Header09 :React.FC<TPersonalInfo> = ({personalInfo}) => {
  const {firstName,lastName,jobTitle,address,phone,email} = personalInfo
  return (
    <div>
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-medium">{firstName} {lastName}, {jobTitle}</h1>
        <p className="text-sm font-medium">{address}, {phone}, {email}</p>
      </div>
    </div>
  )
}
export default Header09