import React from 'react'

type Props = {
    name: string
    href: string 
}

const menu = ({name,href}: Props) => {
  return (
    <>
     <div className="group">
          <a href={`${href}`}>{name}</a> 
        <div className="mx-2 mt-2 duration-500 
          border-b-2 opacity-0
         border-black group-hover:opacity-100"
        >
                
        </div>
      </div>
    </>
  )
}

export default menu