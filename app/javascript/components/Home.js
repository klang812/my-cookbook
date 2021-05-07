import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="vs-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className='jumbotron jumbotron-fluid bg-transparent'>
      <div className='container secondary-color'>
        <h1 className='display-4'>My Recipes</h1>
        <p className='lead'>
          This cookbook is dedicated to my mom.  Without her I would not have found my love for cooking.
        </p>
        <p className='lead'>
          My hope is all that see this will know this comes from a special place in my heart and that you share in the joy it has brought me.
        </p>
        <hr className='my-4' />
        <Link
          to='/recipes'
          className='btn btn-lg custom-button'
          role='button'
        >
          View Recipes
        </Link>
      </div>
    </div>
  </div>
);