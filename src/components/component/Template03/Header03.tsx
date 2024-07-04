import { TPersonalInfo } from "../../../interface"

  
const Header03: React.FC< TPersonalInfo > = ({personalInfo}) => {
    const {firstName,lastName,address,phone,email} = personalInfo
  return (
    <div className='p-12 rounded-xl grid grid-cols-2 items-end  bg-[#bfd1b3]'>
        <h1 className='text-5xl'>{firstName} {lastName}</h1>
        <div className="place-self-end font-medium text-end">
            <div className="flex gap-2">
            <p>{email}</p>
            <span>+</span>
            <p>{phone}</p>
            </div>
            <p>{address}</p>
        </div>
    </div>
  )
}

export default Header03