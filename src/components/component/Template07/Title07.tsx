import { TTitle } from "../../../interface"

const Title07 :React.FC<TTitle> = ({title}) => {
  return (
    <div>
        <h4 className="text-2xl uppercase underline bg-black/10 text-center leading-10">{title}</h4>
    </div>
  )
}
export default Title07