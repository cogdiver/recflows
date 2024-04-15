import React, { useEffect, useState } from "react";
import { WrapperList } from './styles'
import { BASE_URL, fetchData } from '../../utils'
import { Title } from '../Title'
import { ModelDescription } from './Description'


const ModelList = ({ showTitle, endpoint }) => {
  const [ models, setModels ] = useState([]);


  useEffect(() => {
    const url = endpoint ? `${BASE_URL}${endpoint}/models/` : `${BASE_URL}/models/`

    fetchData(
      url,
      { method: 'GET' },
      (error) => console.error(error),
      (json) => setModels(json),
    )
  }, [])

  return <WrapperList className="container">
    {showTitle && <Title title="Models"/>}

    {models.map(m => <ModelDescription
      key={m.id}
      data={m}
      showAppId={true}
    />)}
  </WrapperList>
}

export { ModelList }
