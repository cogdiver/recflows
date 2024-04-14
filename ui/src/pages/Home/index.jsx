import React, { useEffect, useState } from "react";
import { Wrapper } from './styles';
import { BASE_URL,fetchData } from '../../utils'
import { AppDescription } from '../../components/AppDescription'
import { Title } from '../../components/Title'


const Home = () => {
  const [ apps, setApps ] = useState([])
  const [ error, setError ] = useState(null)

  useEffect(() => {
    const url = `${BASE_URL}/apps/`

    fetchData(
      url,
      { method: 'GET' },
      setError,
      (json) => setApps(json),
    )
  }, [])

  return <Wrapper className="container">
    <Title title="Applications"/>

    {apps.map(a => <AppDescription
      key={a.id}
      id={a.id}
      name={a.name}
      description={a.description}
    />)}
  </Wrapper>
}

export { Home }
