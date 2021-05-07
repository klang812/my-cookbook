import React from 'react';
import { Link } from 'react-router-dom';

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { recipe: { ingredients: '' } };
    this.addHtmlEntities = this.addHtmlEntities.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } =this.props;

    const url = `/api/v1/show/${id}`;

    fetch(url).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then(response => this.setState({ recipe: response }))
    .catch(() => this.props.history.push('/recipes'));
  }
  
  addHtmlEntities(str) {
    return String(str).replace(/&lt;/g, '<').replace(/&gt;/g, '>');
  }
}

export default Recipe;
