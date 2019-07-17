import React from 'react'
import axios from 'axios';
import styles from './ProductShow.css'
import Aux from '../../HOC/Aux'

class ProductShow extends React.Component{
    constructor(){
        super()
        this.state = {}
    }

    componentDidMount(){
        console.log('running')
        this.getData()
    }

    getData(){
        axios.get(`/api/products/${this.props.match.params.id}`)
            .then(res => this.setState({product: res.data }))
        const productID = this.props.match.params.id
        this.setState({ productPost: productID })
    }
 
    render(){
        console.log('running')
        console.log(this.state.product)
        if (!this.state.products) return null
        const { product } = this.state
        return(
        <Aux>
           <div className={styles.Container} key={product._id}>
            <h1 className={styles.Title} key={product._id}>{product.name}</h1>
                <p key={product._id}>{product.description}</p>
            <div className={styles.ImageContainer}>
               <img src={product.image[0]} key={image._id}/>
               <img src={product.image[1]} key={image._id}/>
               <img src={product.image[2]} key={image._id}/>
               </div>

               <h2 key={product._id}>{product.price}</h2>

           </div>
        </Aux>
        )
    }
}
export default ProductShow;