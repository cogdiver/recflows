import React, { useEffect, useState } from "react";
import { Variable } from "./Variable";
import { Wrapper } from './styles'
import { BASE_URL,fetchData } from '../../utils'
import { VarDescription } from '../../components/VarDescription'
import { Title } from '../../components/Title'

const Variables = ({ endpoint }) => {
  const [ variables, setVariables ] = useState([])

  useEffect(() => {
    const url = endpoint ? `${BASE_URL}${endpoint}/variables/` : `${BASE_URL}/variables/`
    console.log(url)

    fetchData(
      url,
      { method: 'GET' },
      (error) => console.error(error),
      (json) => setVariables(json),
    )
  }, [])
  return <Wrapper className="container">
    <Title title="Variables"/>
    { !variables.length && "No Variables founds" }
    {variables.map(v => <VarDescription
      key={v.id}
      id={v.id}
      app_id={v.app_id}
      name={v.key}
      value={v.value}
    />)}
  </Wrapper>
}

export { Variable, Variables }
