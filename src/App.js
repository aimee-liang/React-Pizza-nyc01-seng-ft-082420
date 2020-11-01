import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state={
    pizzas: [],
    editPizza: [],
    searchValue: ""
  }

  componentDidMount(){
    fetch("http://localhost:3000/pizzas")
    .then(resp => resp.json())
    .then(pizzas => 
      this.setState({pizzas: pizzas})
    )}

  editPizzaButton = (pizza) => {
    this.setState(() => ({
      editPizza: pizza
    }))
  }

  searchHandler = (e) =>{
    let newValue = e.target.value
    this.setState(() => ({
      searchValue: newValue
    }))
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.editPizza} pizzaState={this.state.searchValue} searchHandler={this.searchHandler} />
        <PizzaList pizzas={this.state.pizzas} edit={this.editPizzaButton}/>
      </Fragment>
    );
  }
}

export default App;
