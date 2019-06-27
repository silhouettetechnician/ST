import React from 'react'

import axios from 'axios';

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
        console.log('rendering')
        if(!this.state.products) return null
        return(
            <div>
            <div>
                <h1>hello</h1>
            {this.state.products.map(product =>
            <div key={product._id}>
                <h1>{product.name}</h1>
                <h2>{product.description}</h2>
            </div>
                )}
            </div>
            </div>
            
        )
    }
}

export default Shop