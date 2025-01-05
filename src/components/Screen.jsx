import React from 'react'
import { CalcContext } from '../context/CalcContext'

function Screen() {

  const {calc} = React.useContext(CalcContext)

  return (
    <div className='screen'>0123</div>
  )
}

export default Screen