import React from "react";
import { WrapperDescription } from './styles'
import { useNavigate } from "react-router-dom";



const ModelDescription = ({ data, showAppId}) => {
  const navigate = useNavigate();
  const { id, name, app_id, solution_id, kwargs } = data

  const handleAppClick = () => {
    navigate(`/apps/${app_id}`);
  }
  return <WrapperDescription>
    <div className="details">
      <div className="app_id">{app_id}</div>
      <div className="model_id">{id}</div>
      <div className="name">{name}</div>
      <div className="solution_id">{solution_id}</div>
    </div>

    <div className="icons">
      <img src="assets/show.svg" alt="" className="icon icon-see-more" />
      <img src="assets/delete-button.svg" alt="" className="icon icon-see-more" />
    </div>
  </WrapperDescription>
}

export { ModelDescription }
