import React from 'react'
import Aux from '../../../HOC/Aux'
import classes from './Modal.css'
import Backdrop from '../Backdrop/Backdrop'

const Modal = ( props ) => {
    return ( 
        <Aux>
            <Backdrop show={props.open} clicked={props.clicked} />
            
            <div className={classes.Modal} style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'}}>
                {props.children}
            </div>
        </Aux>
     );
}
 
export default Modal;