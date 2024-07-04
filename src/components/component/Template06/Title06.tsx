import { TTitle } from "../../../interface"

const Title06:React.FC<TTitle> = ({title}) => {
  return (
    <div>
        <h2 className="text-3xl text-[#4E7EC9]">{title}</h2>
    </div>
  )
}
export default Title06