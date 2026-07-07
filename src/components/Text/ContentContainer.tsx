import React from 'react'

type Props = {
    children: React.ReactNode
    className?: string
}

export const ContentContainer: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={className} style={{maxWidth: 1200, padding: 10, width: '90%' , margin: '0 auto'}}>
        {children}
    </div>
  )
}
