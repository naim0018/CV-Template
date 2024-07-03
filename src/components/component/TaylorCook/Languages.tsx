
import ProgressUI from '../Shadcn/ProgressUI'
import Title from './Title'

const Languages = () => {
  return (
    <div className="space-y-3">
    <Title title={"Languages"} />
    <div className="space-y-2">
      <h3 className="">English</h3>
      <ProgressUI skill={90} />
    </div>
    <div className="space-y-2">
      <h3>French</h3>
      <ProgressUI skill={30} />
    </div>
  </div>
  )
}

export default Languages