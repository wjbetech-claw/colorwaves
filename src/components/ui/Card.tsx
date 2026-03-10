import React from 'react'

export default function Card({children, className}:{children:React.ReactNode,className?:string}){
  return (
    <div className={`bg-[var(--color-panel)] rounded-[18px] shadow-[0_10px_30px_rgba(2,6,23,0.6)] overflow-hidden ${className||''}`}>
    <div className={`bg-[var(--color-panel)] border border-[var(--color-border)] rounded-[var(--radius-md)] shadow-subtle p-[var(--spacing-md)] ${className||''}`}>
      {children}
    </div>
  )
}
