import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Recipe = (props) => {
  const initialFormState = {
    id: null,
    name: '',
    ingredients: '',
    instruction: ''
  }
  const [recipe, setRecipe] = useState(initialFormState);
  const id = props.match.params.id;

  const getRecipe = () => {
    fetch(`/api/v1/show/${id}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network not responding');
      })
      .then(response => setRecipe(response))
      .catch(error => props.history.push('/recipes'));
  }

  const deleteRecipe = () => {
    const token = document.querySelector('meta[name="csrf-token"]').content;

    fetch(`/api/v1/destroy/${id}`, {
      method: 'DELETE',
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network not responding');
      })
      .then(() => props.history.push('/recipes'))
      .catch(error => console.log(error.messages));
  }

  const addHtmlEntities = (str) => {
    return String(str)
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
  }

  const recipeInstructions = addHtmlEntities(recipe.instruction);
  
  let ingredientList = 'No Ingredients';
  if (recipe.ingredients.length > 0) {
    ingredientList = recipe.ingredients
      .split(',')
      .map((ingredient, index) => (
        <li key={index} className='list-group-item'>
          {ingredient}
        </li>
      ));
  }

  useEffect(() => {
    getRecipe();
  }, []);

  return (
    <div className=''>
      <div className='hero position-relative d-flex align-items-center justify-content-center'>
        <img
          src={recipe.image}
          alt={`${recipe.name} image`}
          className='img-fluid position-absolute'
        />
        <div className='overlay bg-dark position-absolute' />
        <h1 className='display-4 position-relative text-white'>
          {recipe.name}
        </h1>
      </div>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-sm-12 col-lg-3'>
            <ul className='list-group'>
              <h5 className='mb-2'>Ingredients</h5>
              {ingredientList}
            </ul>
          </div>
          <div className='col-sm-12 col-lg-3'>
            <ul className='list-group'>
              <h5 className='mb-2'>Instructions</h5>
              <div 
                dangerouslySetInnerHTML={{
                  __html: `${recipeInstructions}`
                }}
              />
            </ul>
          </div>
          <div className='col-sm-12 col-lg-2'>
            <Link
              to={`/recipe/edit/${recipe.id}`}
              className='btn btn-light'>Edit Recipe
            </Link>
            <Button
              action={deleteRecipe}
              title={'Delete'}
              klass={'btn btn-danger'}
            />
          </div>
        </div>
        <Link to='/recipes' className='btn btn-link'>
          &#8249;
          Back to Recipes
        </Link>
      </div>
    </div>
  );
}

export default Recipe;


