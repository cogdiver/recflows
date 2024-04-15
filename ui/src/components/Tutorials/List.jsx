import React, { useEffect, useState } from "react";
import { WrapperList } from './styles'
import { BASE_URL, fetchData } from '../../utils'
import { Title } from '../Title'
import { TutorialDescription } from './Description'

const TutorialsList = ({ showTitle, showSolution, endpoint }) => {
  const [ tutorials, setTutorials ] = useState([]);


  useEffect(() => {
    const url = endpoint ? `${BASE_URL}${endpoint}/tutorials/` : `${BASE_URL}/tutorials/`

    fetchData(
      url,
      { method: 'GET' },
      (error) => console.error(error),
      (json) => setTutorials(json),
    )
  }, [])

  return <WrapperList className="container">
    {showTitle && <Title title="Tutorials"/>}

    {tutorials.map(t => <TutorialDescription
      key={t.id}
      id={t.id}
      solution_id={t.solution_id}
      name={t.name}
      content={t.content}
      showSolution={showSolution}
    />)}
  </WrapperList>
}

export { TutorialsList }
