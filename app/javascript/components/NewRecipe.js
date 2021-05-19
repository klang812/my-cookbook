import React from 'react';
import { Link } from 'react-router-dom';
import FormContainer from '../containers/FormContainer';

const NewRecipe = (props) => (
  <div className='container mt-5'>
    <div className='row'>
      <div className='col-sm-12 col-lg-6 offset-lg-3'>
        <h1 className='font-weight-normal mb-5'>
          Add a new recipe to an awesome collection
        </h1>
        <FormContainer
          submitUrl={'/api/v1/recipes/create'}
          urlMethod={'POST'}
          routeProps={props}
          editable={false}
        />
      </div>
    </div>
  </div>
)

export default NewRecipe;



