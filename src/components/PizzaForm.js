import React from "react"

// const PizzaForm = (props) => {
class PizzaForm extends React.Component {

  state={
    topping: "",
    size: "",
    vegetarian: ""
  }

  submitPizza = (e) => {
    console.log(this.props.pizza)
  }

  setPizza = () => {
    this.setState(() => ({
      topping: this.props.pizza.topping,
      size: this.props.pizza.size,
      vegetarian: this.props.pizza.vegetarian
    }))
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
    console.log(this.state)
  }

  searchPizzaForm = (e) => {
    this.props.searchHandler(e)
    console.log("This is what we're looking for", e.target.value)
  }


  render(){
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" onChange={this.searchPizzaForm} name="topping" value={
                //Pizza Topping Should Go Here
                this.props.pizza.topping
                // null
              }/>
        </div>
        <div className="col">
          <select value={this.props.pizza.size} name="size" onChange={this.changeHandler} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="vegetarian" onChange={this.changeHandler} value={this.props.pizza.vegetarian} checked={this.props.pizza.vegetarian ? true : false}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value={this.props.pizza.vegetarian} checked={this.props.pizza.vegetarian ? false : true}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={this.submitPizza}>Submit</button>
        </div>
      </div>

  )
}
}

export default PizzaForm
