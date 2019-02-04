import React, {Component} from 'react'
import '../App.css';
import Item from "./Item"

class ItemCard extends Component {



  render() {
    return(
        <div>
          <div className="container">
            {this.props.products.map(product =>
              <Item {...product} markPurchased={this.props.markPurchased} />

            )}

          </div>

        </div>
    )
  }
}

export default ItemCard
