import { TTitle } from "../../../interface"


const Title03:React.FC<TTitle>= ({title}) => {
  return (
    <div>
        <h2 className='text-4xl text-[#76995f]'>{title}</h2>
    </div>
  )
}

export default Title03