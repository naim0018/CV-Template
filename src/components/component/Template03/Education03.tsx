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

const Education03 : React.FC<EducationProps> = ({education}) => {
    const {universityName,startDate,endDate,major,currentlyStudying} = education
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