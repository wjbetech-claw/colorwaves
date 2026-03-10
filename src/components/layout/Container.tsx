import React from 'react'

export default function Container({children}:{children:React.ReactNode}){
  return (
    <div className="mx-auto px-8 sm:px-12" style={{maxWidth: 1100}}>{children}</div>
  )
}
