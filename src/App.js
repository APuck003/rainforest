import React, { Component } from 'react';
import Header from './components/Header';
import ItemCard from './components/ItemCard';
import './App.css';



let updateArray = (array, id, value ) => {
  return array.map( element =>
  { if(element.id === id){
    return{...element, ...value}
  }else {
    return element
  }})
}


class App extends Component {

  constructor() {
    super()

    this.state = {
      products: [],
    }

  }
  componentDidMount(){
    fetch('http://localhost:3000/products')
         .then(res => res.json())
         .then(products => this.setState({products}))
  }

  markPurchased = (id) => {
   this.setState({
     products: updateArray(this.state.products, id, {purchased: true})
   })
    }

  render() {
    console.log(this.state.products)
    return (
      <div className="App">
        <div>
          <Header products={this.state.products} />

          <ItemCard products={this.state.products} markPurchased={this.markPurchased} />
        </div>
      </div>
    );
  }
}

export default App;
