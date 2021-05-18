import React from "react";
import { Link } from "react-router-dom";
// import RecipeForm from "./RecipeForm";
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


// export default class UpdateRecipe extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//             name: "",
//             ingredients: "",
//             instructions: "",
//             image: ""
//     };
//     this.onChange = this.onChange.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//     this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
//   }

//   componentDidMount() {
//     const { match: { params: { id } } } = this.props;
//     fetch(`/api/v1/show/${id}`).
//       then((response) => response.json()).
//       then((recipe) => this.setState({ ...recipe }));
//   }

//   handleInputChange = (event) => {
//     this.setState({ [event.target.name]: event.target.value });
//   }

//   updateRecipeRequest = (event) => {
//     event.preventDefault();
//     fetch(`/api/v1/update/${this.state.id}`, {
//       method: 'PATCH',
//       body: JSON.stringify(this.state),
//       headers: { 'Content-Type': 'application/json' },
//     }).then((response) => {
//       response.json()
//       alert('Recipe updated successfully');
//       location.href = '/';
//     });
//   }

//   render() {
//     const {name, ingredients, instructions} = this.state;
//     return (
//       <div>
//         <h3>Recipe</h3>
//         <div>
//           <label>Name: </label>
//           <input
//             type='text'
//             name='name'
//             value={name}
//             onChange={this.handleInputChange}
//             />
//         </div>
//         <div>
//           <label>Ingredients: </label>
//           <input
//             type='text'
//             name='ingredients'
//             value={ingredients}
//             onChange={this.handleInputChange}
//             />
//         </div>
//         <div>
//           <label>Instructions: </label>
//           <input
//             type='text'
//             name='instructions'
//             value={instructions}
//             onChange={this.handleInputChange}
//             />
//         </div>
        
//         <button onClick={this.updateRecipeRequest}>Update</button>
//       </div>
//     );
//   }
// }

// class EditRecipe extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "",
//       ingredients: "",
//       instructions: "",
//       image: ""
//     };

//     this.onChange = this.onChange.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//     this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
//   }

//   stripHtmlEntities(str) {
//     return String(str)
//       .replace(/</g, "&lt;")
//       .replace(/>/g, "&gt;");
//   }

//   onChange(event) {
//     this.setState({ [event.target.name]: event.target.value });
//   }

//   onSubmit(event) {
//     event.preventDefault();
//     console.log(this.state);
//     const { recipe, name, ingredients, instructions, image } = this.state;

//     if (name.length == 0 || ingredients.length == 0 || instructions.length == 0)
//       return;

//     const url = `/api/v1/update/${recipe.id}`;

//     const body = {
//       recipe: {
//         name,
//         ingredients,
//         instructions: instructions.replace(/\n/g, "<br> <br>"),
//         image
//       }
//     };

//     const token = document.querySelector('meta[name="csrf-token"]').content;
//     fetch(url, {
//       method: "PATCH",
//       headers: {
//         "X-CSRF-Token": token,
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(body)
//     })
//       .then(response => {
//         if (response.ok) {
//           return response.json();
//         }
//         throw new Error("Network response was not ok.");
//       })
//       .then(response => this.props.history.push(`/recipe/${response.id}`))
//       .catch(error => console.log(error.message));
//   }

//   componentDidMount() {
//     const { match: { params: { id } } } = this.props;

//     const url = `/api/v1/show/${id}`;

//     fetch(url).then(response => {
//       if (response.ok) {
//         return response.json();
//       }
//       throw new Error('Network response was not ok.');
//     })
//     .then(response => this.setState({ recipe: response }))
//     .catch(() => this.props.history.push('/recipes'));
//   }
  
//   addHtmlEntities(str) {
//     return String(str).replace(/&lt;/g, '<').replace(/&gt;/g, '>');
//   }

//   render() {
//     return (
//       <RecipeForm onSubmit={this.onSubmit} onChange={this.onChange} recipe={this.state} button_label="Update Recipe" cancel_action={`/recipe/${this.props.match.params.id}`} />
//     );
//   }
// }

// export default EditRecipe;