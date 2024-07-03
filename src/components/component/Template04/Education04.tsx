
type EducationProps = {
  edu: {
    universityName: string,
    startDate: string,
    endDate?: string,
    degree: string,
    major: string,
    currentlyStudying: boolean,
    description?: string
  }
}


const Education04 : React.FC<EducationProps>= ({edu}) => {
  const {universityName,major} = edu
  return (
    <div className='pt-5'>
    <div className="flex items-center gap-4 font-medium text-[#C98566]">
    <p>{major}</p>
    </div>
        <h4>{universityName}</h4>
</div>
  )
}

export default Education04