
interface Reference {
    reference:{
        firstName: string,
        lastName: string,
        jobTitle:string,
        address: string,
        phone: string,
        email: string
    }
  }
  
const Reference09 :React.FC<Reference> = ({reference}) => {
    const {firstName,lastName,jobTitle,email,phone} = reference
  return (
    <div >
        <h4 className="font-medium text-lg">{firstName} {lastName} from {jobTitle}</h4>
        <p className="">{email} - {phone}</p>
    </div>
  )
}
export default Reference09