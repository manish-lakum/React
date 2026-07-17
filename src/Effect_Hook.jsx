import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';

export default function Effect_Hook() {
    const [count, setCount] = useState(0);
    const [quantity, setQuantity] = useState(20);

    function increment() {
        setCount(count + 1);
    }

    function mount() {
        console.log("Component mounted");
    }

    function unmount() {
        console.log("Component unmounted");
    }

    //when the component is mounting

    useEffect(() => {
        mount();
    },[])

    useEffect(() => {
        return () => {
            unmount();
        };
    },[])

    return (
        <>
            <h2>Effect Hook</h2>
            <p>Count: {count}</p>
            <p>Quantity: {quantity}</p>
            <Button onClick={increment}>Add to Cart</Button>
            <Button onClick={() =>{setQuantity(quantity - 1)}}>Quantity</Button>
            
            
        </>
    );
}