import React from "react";
import { Link } from "react-router-dom";
import FormContainer from '../containers/FormContainer';

const EditRecipe = (props) => {
  const id = props.match.params.id

  return (
    <div className="container mt-5">
      <div className='row'>
        <div className='col-sm-12 col-lg-6 offset-lg-3'>
          <h1 className='font-weight-normal md-5'>
            Edit Recipe
          </h1>
          <FormContainer
            recipeId={id}
            submitUrl={`/api/v1/update/${id}`}
            urlMethod={'PUT'}
            routeProps={props}
            editable={true}
          />
        </div>
      </div>
    </div>
  )
}

export default EditRecipe;


