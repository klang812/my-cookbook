import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const Recipes = (props) => {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = () => {
    fetch('/api/v1/recipes/index')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network is not responding');
      })
      .then(response => setRecipes(response))
      .catch(() => recipes.history.push('/'));
  }

  const allRecipes = recipes.map((recipe, index) => (
    <div key={index} className='col-md-6 col-lg-4'>
      <Link to={`/recipe/${recipe.id}`} className='text-decoration-none'>
        <div className='card-mb-4'>
          <img
            src={recipe.image}
            className='card-img-top'
            alt={`${recipe.name} image`}
          />
          <div className='card-body'>
            <h5 className='card-title'>{recipe.name}</h5>
          </div>
        </div>
      </Link>
    </div>
  ));

  const noRecipe = (
    <div className='vw-100 vh-50 d-flex align-items-center justify-content-center'>
      <h4>
        No recipes yet. Why not
        <Link
          label='new'
          to={'/recipe'}>&nbsp;create one?
        </Link>
      </h4>
    </div>
  );

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <>
      <section
        className='jumbotron jumbotron-fluid text-center'
        style={
          {
            backgroundImage: `url("https://user-images.githubusercontent.com/4002284/81431093-6f8be000-9115-11ea-8866-0a18f7654b3d.png")`,
            backgroundSize: "cover"
          }
        }>
          <div className='container py-5' style={{zIndex: 1}}>
            <div className='col-lg-8 col-md-10 text-left'>
              <h1 className='display-4'>Recipes for every occasion</h1>
              <div className='row row-no-gutters'>
                <div className='col-md-10'>
                  <p className='lead text-muted'>
                    We've pulled together our most popular recipes, our latest additions, and our editor's picks, so there's sure to be something tempting for you to try.
                  </p>
                </div>
              </div>
              <div>
                <Link to='/recipe' className='btn custom-button'>
                  Create new recipe
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className='py-5'>
          <main className='container'>
            <div className='row'>
              {recipes.length > 0 ? allRecipes : noRecipe}
            </div>
            <Link to='/' className='btn btn-link'>
              &#8249;
              Back to Home
            </Link>
          </main>
        </div>
      </>
  ); 
}

export default Recipes;

// class Recipes extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       recipes: []
//     };
//   }

//   componentDidMount() {
//     const url = '/api/v1/recipes/index';
//     fetch(url)
//       .then(response => {
//         if (response.ok) {
//           console.log(response);
//           return response.json();
//         }
//         throw new Error('Network response was not OK.');
//       })
//       .then(response => this.setState({ recipes: response }))
//       .catch(() => this.props.history.push('/'));
//   }
  
//   render() {
//     const { recipes } = this.state;
//     const allRecipes = recipes.map((recipe, index) => (
//       <div key={index} className='col-md-6 col-lg-4'>
//         <div className="card mb-4">
//           <img src={recipe.image}
//           className='card-img-top'
//           alt={`${recipe.name} image`}/>
//           <div className='card-body'>
//             <h5 className='card-title'>{recipe.name}</h5>
//             <Link to={`/recipe/${recipe.id}`} className='btn custom-button'>
//               View Recipe
//             </Link>
//           </div>
//         </div>
//       </div>
//     ));
//     const noRecipe = (
//       <div className='vs-100 vh-50 d-flex align-items-center justify-content-center'>
//         <h4>
//           No recipes yet.  Why not <Link to='/recipe/new'>create one!</Link>
//         </h4>
//       </div>
//     );
//     return (
//       <>
//         <section className="jumbotron jumbotron-fluid text-center">
//           <div className='container py-5'>
//             <h1 className='display-4'>Recipes for every occasion</h1>
//             <p className='lead text-muted'>
//               We’ve pulled together our most popular recipes, our latest
//               additions, and our editor’s picks, so there’s sure to be something
//               tempting for you to try.
//             </p>
//           </div>
//         </section>
//         <div className='py-5'>
//           <main className='container'>
//             <div className='text-right mb-3'>
//               <Link to='/recipe/new' className='btn custom-button'>
//                 Create New Recipe
//               </Link>
//             </div>
//             <div className='row'>
//               {recipes.length > 0 ? allRecipes : noRecipe}
//             </div>
//             <Link to='/' className='btn btn-link'>
//               Home
//             </Link>
//           </main>
//         </div>
//       </>
//     );
//   }
// }

// export default Recipes;
