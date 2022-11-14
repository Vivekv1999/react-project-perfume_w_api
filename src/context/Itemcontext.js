import React from 'react'
import Prcontext from './productcontext'


export default function Itemcontext(props) {


  return (
    <>
    
    <Prcontext.Provider value="nil">
        {props.children}
    </Prcontext.Provider>

    </>
  )
}
