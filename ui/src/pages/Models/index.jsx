import React from "react";
import { WrapperModels } from "./styles";
import { Model } from './Model'
import { ModelList } from '../../components/Models'

const Models = () => {
  return <WrapperModels>
    <ModelList showTitle={true}/>
  </WrapperModels>
}

export { Models, Model }
