import React from 'react'


type Props = {
    children: React.ReactNode
    className?:string}

export const ContentContainer: React.FC<Props>=  ({children, className}) =>{
  return (

    <div className={className} style={{maxWidth: 1200, padding: 10, margin: '0 auto', background: 'blur(10px)',backgroundColor: 'rgb(122, 112, 112)' ,borderRadius: 15}}>
      {children}</div>
    
  )
}
