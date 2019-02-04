import React, {Component} from 'react'
import '../App.css';

class Item extends Component {


  render() {
    return (
        <div className="list-container">
          <img className="image" src={this.props.image_url} alt=""/>
          <p>{this.props.brand} ${this.props.price}</p>
          <p>{this.props.title}</p>
          {this.props.purchased === false ?
              <button onClick={() => this.props.markPurchased(this.props.id)} className="button">Buy</button> :
              <button className="button">Already Purchased</button>
          }
        </div>
    )
  }
}

export default Item