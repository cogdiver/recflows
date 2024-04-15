import React from "react";
import { Wrapper } from './styles'
import { TutorialsList } from '../../components/Tutorials'


const Tutorials = () => {
  return <Wrapper>
    <TutorialsList
      showTitle={true}
      showSolution={true}
    />
  </Wrapper>
}

export { Tutorials }
