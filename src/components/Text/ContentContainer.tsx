import React from 'react'



type Props = {
    children: React.ReactNode
    className?:string}

export const ContentContainer: React.FC<Props>=  ({children, className}) =>{
  return (

    <div className={className} 
    style={{maxWidth: 1200, 
    padding: 10, 
    margin: '0 auto', 
    background: 'blur(10px)',
    borderRadius: 24, 
    fontFamily: 'Arial',
    backgroundColor: 'rgba(242, 239, 233, 0.35)',
    backdropFilter: 'blur(20px)',overflow: 'hidden',
  }}>
      {children}</div>
    
  )
}