import React, { useContext } from 'react'
import { DegreeContext } from './DegreeContext'

const StreamTitle = () => {
  const [degree] = useContext(DegreeContext)
  return (
    <div>
      <h2>{degree.title}</h2>
    </div>
  )
}

export default StreamTitle
