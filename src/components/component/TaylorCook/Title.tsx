import React from 'react'

type TTitle ={
    title:string
}

const Title :React.FC<TTitle>  = ({title}) => {
  return (
    <div className="space-y-2 pb-5 ">
              <h3 className="text-3xl tracking-wider uppercase">{title}</h3>
              <hr className="border-b-[2px] border-black w-10 "/>
    </div>
  )
}

export default Title