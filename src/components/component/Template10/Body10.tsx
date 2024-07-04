type TSummary={
    summary:string
}
const Body10 :React.FC<TSummary> = ({summary}) => {
  return (
    <div className="grid grid-cols-8 py-5">
        <div className="">To</div>
        <div className="col-span-6">
            <div className="grid grid-cols-2 text-start">
            <h4>Ms. Pinkerton</h4>
            <h4>Barnees</h4>
            </div>
            <div className=" py-10">
                {summary}
            </div>
        </div>
    </div>
  )
}
export default Body10