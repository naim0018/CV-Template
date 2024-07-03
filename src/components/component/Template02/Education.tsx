

type EducationProps = {
    education: {
      universityName: string,
      startDate: string,
      endDate?: string,
      degree: string,
      major: string,
      currentlyStudying: boolean,
      description?: string
    }
  }
const Education: React.FC<EducationProps> = ({education}) => {
    const {universityName,startDate,endDate,major,currentlyStudying} = education
  return (
    <div>
        <div className="grid grid-cols-4">
            <p className='font-medium'>{startDate} - {currentlyStudying ?`Present`:endDate}</p>
            <div className="col-span-3">
                <div className="flex items-start justify-between">
                <h3 className='text-lg font-bold'>{universityName}</h3>
                <p className='font-medium text-black/80'>New York</p>
                </div>
                <p className='text-base font-medium text-black/60'>{major}</p>

            </div>
        </div>
    </div>
  )
}

export default Education