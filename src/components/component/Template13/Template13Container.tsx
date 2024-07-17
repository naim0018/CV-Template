import BottomSection13 from "./BottomSection13"
import LeftSection13 from "./LeftSection13"
import RightSection13 from "./RightSection13"

const Template13Container = () => {
  return (
    <div className="container mx-auto border">
         <div className="grid grid-cols-7">
            <div className="col-span-2">
            <LeftSection13/>
            </div>
            <div className="col-span-5">
            <RightSection13/>
            </div>
         </div>
         <BottomSection13/>
    </div>
  )
}
export default Template13Container