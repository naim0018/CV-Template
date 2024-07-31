import BottomSection13 from "./BottomSection13";
import LeftSection13 from "./LeftSection13";
import RightSection13 from "./RightSection13";

const Template13Container = () => {
  return (
    <div className=" max-w-[595px] mx-auto  px-4 pt-6 pb-10 ">
      <div className="flex ">
        <div className=" w-[167px] pr-2">
          <LeftSection13 />
        </div>
        <div className=" bg-[#f8f8f8] py-8 px-4 rounded-md">
          <RightSection13 />
        </div>
      </div>
      <div className="bg-[#f8f8f8] mt-[18px] p-6 rounded-md">
      <BottomSection13 />
      </div>
    </div>
  );
};
export default Template13Container;
