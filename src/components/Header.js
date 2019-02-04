import React, {Component} from 'react'
import '../App.css';

class Header extends Component {

  headerDisplay = () => {
    return {
      display: 'flex',
      justifyContent: 'space-around',
    }
  }

  render() {
    return (
        <div>
          <header>
            <div style={this.headerDisplay()}>
              <h4>Rainforest TM</h4>
              {/*<h4>Total: {this.props.products.total}</h4>*/}
            </div>
          </header>
        </div>
    )
  }
}

export default Header