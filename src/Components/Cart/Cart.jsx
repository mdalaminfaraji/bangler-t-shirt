import React from 'react';
import './Cart.css';

const Cart = ({cart,handleRemoveFromCart}) => {
    let message;
    if(cart.length===0){
        message=<p>Please add some products</p>
    }else{
        message=<div>
            <h3>boroloxx</h3>
            <p><small>thanks for giving your money</small></p>
        </div>
    }
    return (
        <div>
            <h3 className={cart.length===1?'blue':'red'}>Order summary:{cart.length}</h3>
            <p className={`bold bordered ${cart.length===3?'orange':'blue'}`}>something</p>
            {cart.length>2?<span>aro kino</span>:<span>fokira</span>}
            {message}
            {
                cart.map(tshirt=><p key={tshirt._id}
                >{tshirt.name} <button onClick={()=>handleRemoveFromCart(tshirt._id)}>X</button></p>)
            }
            {
                cart.length===2 &&<p>Double bonanza!!!</p>
            }
            {
                cart.length===3||<h3>Tinta to hollo na</h3>
            }
        </div>
    );
};

export default Cart;

/*

conditional rendering 
1. use if else to set a variable that will contain an element, components div etc.
2. ternary: condition? "for true":"false"
3. logical &&: (if the condition is true then the next things will be displayed)
4. Logical || (if the condition is false then the next things will be displayed)
*/