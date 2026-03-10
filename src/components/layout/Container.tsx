import React from 'react'

export default function Container({children}:{children:React.ReactNode}){
  return (
    <div className="mx-auto px-4" style={{maxWidth: 980}}>{children}</div>
  )
}
