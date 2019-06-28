// import React from 'react'
// import axios from 'axios';

// class ProductShow extends React.Component{
//     constructor(){
//         super()
//         this.state = {}
//     }

//     componentDidMount(){
//         axios.get(`api/products/${this.props.match.params.id}`)
//         console.log(this.state)
//         .then(res => this.setState({ products: res.data }))
    
//     }

//     render(){
//         if (!this.state.products) return null
//         const { product } = this.state
//         console.log(this.state)
//         return(
//            <h1>Shop Each</h1>
            
//         )
//     }
// }
// export default ProductShow;