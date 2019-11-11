import React, { useContext } from 'react';
import { DegreeContext } from './DegreeContext'

import StreamsDisplay from './StreamsDisplay'


const DegreeExplorer = () => {

  const [degree] = useContext(DegreeContext);
  const { subjectSets } = degree;

  return (
    <div className='d-flex justify-content-between container'>
      {subjectSets && subjectSets
        .filter(subjects => subjects.Category === 'Core')
        .map((subjects, index) => <StreamsDisplay key={index} title={subjects.Title} opSubjects={subjects.OptionalSubjects} reqSubjects={subjects.RequiredSubjects} />
        )
      }
    </div>
  )
}

export default DegreeExplorer
