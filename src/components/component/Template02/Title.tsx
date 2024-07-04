import { TTitle } from "../../../interface"

const Title: React.FC<TTitle> = ({title}) => {
  return (
    <div className='w-fit'>
        <h2 className='text-lg font-bold uppercase'>{title}</h2>
        <hr className='border-b-2 border-black '/>
    </div>
  )
}

export default Title