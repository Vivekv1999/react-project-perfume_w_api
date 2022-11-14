import React, { useContext } from 'react'
import Prcontext from './productcontext'

export default function Howusecontext() {
    const namee=useContext(Prcontext)
  return (
    <div>
      <h1>{namee}</h1>
    </div>
  )
}
