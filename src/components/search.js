import { Component } from '../lib/react/index.js';
import Form from './form.js';
import Input from './input.js';
import Button from './button.js';
/* import { render } from '../lib/react-dom.js'; */
import store from '../store.js';
import { SEARCH_MOVIE, SET_FILTER } from '../actions/index.js';

class Search extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const query = formData.get('title');

    if (query){
      return store.dispatch({
        type: SEARCH_MOVIE,
        payload: query,
      })
    }

    return store.dispatch({
      type: SET_FILTER,
      payload: 'all',
    })
  }

  render() {
    return Form({
      onSubmit: this.handleSubmit,
      children: [
        new Input({
          placeholder: 'Escribe tu película favorita',
          name: 'title',
        }),
        new Button(null,'Buscar'),
      ]
    })
  }
}

export default Search;