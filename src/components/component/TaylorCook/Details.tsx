

type TPersonalInfo ={
    personalInfo : {
        address:string,
        phone:string,
        email:string
    }
}

const Details :React.FC<TPersonalInfo> = ({personalInfo}) => {
    const {address,phone,email} = personalInfo
    
  return (
    <div className="space-y-5 pt-10">
    {/* Address */}
    <div className="">
      <h3 className="font-semibold">Address</h3>
      <p className="text-black/60 font-medium">{address}</p>
    </div>
    {/* Phone */}
    <div className="">
      <h3 className="font-semibold">Phone</h3>
      <p className="text-black/60">{phone}</p>
    </div>
    {/* Email */}
    <div className="">
      <h3 className="font-semibold">Email</h3>
      <p className="text-black/60">{email}</p>
    </div>
    {/* Nationality */}
    <div className="">
      <h3 className="font-semibold">Nationality</h3>
      <p className="text-black/60">American</p>
    </div>
  </div>
  )
}

export default Details