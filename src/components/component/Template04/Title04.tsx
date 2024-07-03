
interface TitleProps {
    title: string
  }

const Title04:React.FC<TitleProps>= ({title}) => {
  return (
    <div>
        <h2 className='text-4xl text-[#B8623D] '>{title}</h2>
    </div>
  )
}

export default Title04