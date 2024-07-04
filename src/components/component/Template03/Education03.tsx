import { TEducation } from "../../../interface"


const Education03 : React.FC<TEducation> = ({edu}) => {
    const {universityName,startDate,endDate,major,currentlyStudying} = edu
  return (
    <div className=''>
        <div className="flex items-center gap-4 font-medium text-lime-800">
            <h4>{universityName}</h4>
            <p className=' '>{startDate} - {currentlyStudying ? `Present` : endDate}</p>
        </div>
        <p>{major}</p>
    </div>
  )
}

export default Education03