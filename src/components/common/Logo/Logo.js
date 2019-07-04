import React from 'react'
import stLogo from '../../../assets/images/STlogo2.jpg'
import classes from './Logo.css'

const Logo = ( props ) => {
    return ( 
        <div className={classes.Logo}>
        <img src={stLogo} alt='Logo' />
        </div>
     );
}
 
export default Logo;