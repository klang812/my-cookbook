import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import { checkPropTypes } from 'prop-types';

const FormContainer = (props) => {

  const initialFormState = {
    id: null,
    name: '',
    ingredients: '',
    instruction: ''
  }

  const [recipe, setRecipe] = useState(initialFormState);

  const getRecipe = () => {
    fetch(`/api/v1/edit/${props.recipeId}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network not responding');
      })
      .then(response => setRecipe(response))
      .catch(error => props.history.push('/recipes'));
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value});
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!recipe.name) return;
    const token = document.querySelector('meta[name="csrf-token"]').content;

    fetch(props.submitUrl, {
      method: props.urlMethod,
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(recipe)
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network not responding');
    })
    .then(response => props.routeProps.history.push(`/recipe/${response.id}`)
    )
    .catch(error => console.log(error.message));
  }

  useEffect(() => {
    if (!!props.editable) { getRecipe() }
  }, []);

  return(
    <form onSubmit={handleSubmit}>
      <Input
        inputType={'text'}
        title={'Recipe'}
        id={'recipeName'}
        name={'name'}
        value={recipe.name}
        placeholder={'Enter recipe name'}
        handleChange={handleInputChange}
      />
      <Input 
        inputType={'text'}
        title={'Ingredients'}
        id={'recipeIngredients'}
        name={'ingredients'}
        value={recipe.ingredients}
        placeholder={'Enter ingredients separated by a comma'}
        handleChange={handleInputChange}
      />
      <TextArea
        title={'Instructions'}
        id={'recipeInstructions'}
        name={'instruction'}
        value={recipe.instruction}
        rows={5}
        handleChange={handleInputChange}
        placeholder={'Enter recipe preparation instructions'}
      />
      <Button
        action={handleSubmit}
        title={!!props.editable ? 'Update' : 'Save'}
        style={buttonStyle}
        klass={'btn btn-dark'}
      />
      <Link to='/recipes' className='btn btn-link'>
        &#8249;
        Back to Recipes
      </Link>
    </form>
  )
}

const buttonStyle = {margin : '10px 10px 10px 10px'}

export default FormContainer;

