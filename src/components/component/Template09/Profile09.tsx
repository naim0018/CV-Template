import Title09 from "./Title09"

type TProfile ={
    summary:string
}

const Profile09 :React.FC<TProfile>= ({summary}) => {
  return (
    <div className="grid grid-cols-7">
        <div className="col-span-2">
        <Title09 title={'Profile'} />
        </div>
        <p className="col-span-5">{summary}</p>
    </div>
  )
}
export default Profile09