import React from 'react'
import ReactDOM from 'react-dom'

import Shop from './containers/Shop'

class App extends React.Component{
    constructor(){
        super()
    }


render() {
    return(
        <div>
            {/* <h1>hello</h1> */}
            <Shop />
        </div>
        
    )
}

}

ReactDOM.render(
    <App />,
    document.getElementById('root')
  )