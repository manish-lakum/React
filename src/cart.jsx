import {useState} from 'react';

export default function Cart(){
    const [cartItems, setCartItems] = useState(0);
    const [quantity, setQuantity] = useState(10);
    return(
        <>
            <h2>Cart : {cartItems }</h2>
            <h2>Quantity : {quantity}</h2>

            <button onClick={() => {setCartItems(cartItems + 1);
                setQuantity(quantity - 1);
             }}>Add Item</button>
        </>
    )
}