import { TPersonalInfo } from "../../../interface"

const Header06 :React.FC<TPersonalInfo> = ({personalInfo}) => {
    const {firstName,lastName,address,phone,email,jobTitle} = personalInfo
  return (
    <div className="text-[#4E7EC9] flex items-end justify-between">
        <div className="">
            <h4 className="text-4xl">{firstName} {lastName}</h4>
            <p>{jobTitle}</p>
        </div>
        <div className="">
            <div className="flex ">
            <p>{email}</p>
            <p>{phone}</p>
            </div>
            <p>{address}</p>
        </div>
    </div>
  )
}
export default Header06