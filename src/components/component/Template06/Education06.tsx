import { TEducation } from "../../../interface"

const Education06:React.FC<TEducation> = ({edu}) => {
    const {universityName,degree,major} = edu
  return (
    <div>
        <div className="">
            <p className="text-[#4E7EC9]">{degree} in {major}</p>
            <p>{universityName}</p>
        </div>
    </div>
  )
}
export default Education06