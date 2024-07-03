
interface TitleProps {
    title: string
  }

const Title03:React.FC<TitleProps>= ({title}) => {
  return (
    <div>
        <h2 className='text-4xl text-[#76995f]'>{title}</h2>
    </div>
  )
}

export default Title03