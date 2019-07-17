import React from 'react'
import classes from './Shop.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Shop extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount(){
    console.log('component did mount')
    axios.get('api/products')
      .then(res => this.setState({ products: res.data }))
      .catch(err => console.log(err))

  }

  render(){
    
    if(!this.state.products) return null
    return(
      <div className={classes.container}>
        
        {this.state.products.map(product =>
        
        <Link to={`/products/${product._id}`}>
        <div className={classes.content} key={product._id}>
           <div className={classes.contentOverlay} key={product._id}></div> 
              <img className={classes.contentImage} src={product.image[0]} alt={product.name}/>
              <div className={`${classes.contentDetails} ${classes.fadeInLeft}`}>
              <h3 className={classes.contentTitle}>{product.name}</h3>
          </div>
        </div>
        </Link>
          )} 
      </div>
    )
  }
}

export default Shop
