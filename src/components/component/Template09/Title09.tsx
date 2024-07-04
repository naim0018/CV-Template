type TTitle ={
    title:string
}
const Title09:React.FC<TTitle> = ({title}) => {
  return (
    <div>
        <h4 className="uppercase font-medium tracking-wider">{title}</h4>
    </div>
  )
}
export default Title09