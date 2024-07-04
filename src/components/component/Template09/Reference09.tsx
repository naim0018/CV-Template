import { TPersonalInfo } from "../../../interface"


  
const Reference09 :React.FC<TPersonalInfo> = ({personalInfo}) => {
    const {firstName,lastName,jobTitle,email,phone} = personalInfo
  return (
    <div >
        <h4 className="font-medium text-lg">{firstName} {lastName} from {jobTitle}</h4>
        <p className="">{email} - {phone}</p>
    </div>
  )
}
export default Reference09