import { TPersonalInfo } from "../../../interface"

const AddressSection11 : React.FC<TPersonalInfo >= ({personalInfo}) => {
    const {address,phone,email} = personalInfo
  return (
    <div>
        <div className="">
            <h4 className="tracking-wider uppercase text-xs py-2 text-black/30 font-medium ">Address</h4>
            <p className="text-sm font-medium text-black/80">{address}</p>
            <h4 className="tracking-wider uppercase text-xs py-2 text-black/30 font-medium ">Email</h4>
            <p className="text-sm font-medium text-black/80">{email}</p>
            <h4 className="tracking-wider uppercase text-xs py-2 text-black/30 font- ">Phone</h4>
            <p className="text-sm font-medium text-black/80">{phone}</p>
        </div>
    </div>
  )
}
export default AddressSection11