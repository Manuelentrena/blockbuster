class Component {
  
  constructor(props = {}, state = {}){
    this.props = props;
    this.state = state;
  }

  update() {}

  #updater(){
    this.update(this.render());
    this.componentDidUpdate();
  }

  /* Se llama antes de renderizar el componente */
  componentWillMount() {}

  /* Se llama despues de renderizar el componente */
  componentDidMount() {}

  /* Se llama despues de actualizar el componente */
  componentDidUpdate() {}

  setState(newState) {
    /* this.state = {...this.state, ...newState}; */
    this.state = newState;
    this.#updater()
  }

  build() {
    this.componentWillMount();
    return this.render();
  }

}

export {
  Component,
}