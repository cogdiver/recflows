import React, { useEffect, useState } from "react";
import { Wrapper } from './styles'
import { BASE_URL, fetchData } from '../../utils'
import { Solution } from '../../components/Solution'
import { Title } from "../../components/Title";

const Solutions = () => {
  const [ solutions, setSolutions ] = useState([]);


  useEffect(() => {
    const url = `${BASE_URL}/solutions/`

    fetchData(
      url,
      { method: 'GET' },
      (error) => console.error(error),
      (json) => setSolutions(json),
    )
  }, [])

  return <Wrapper className="container">
    <Title title="Solutions"/>
    {solutions.map(s => <Solution
      key={s.id}
      id={s.id}
      module={s.module}
    />)}
  </Wrapper>
}

export { Solutions }
