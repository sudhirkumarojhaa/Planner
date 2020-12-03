import React from 'react'

export default function Priority({onClick,bg}) {
  return (
    <div onClick={onClick} className="radius" style={{backgroundColor: bg}}>
    </div>
  )
}
