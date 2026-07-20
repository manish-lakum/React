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
            <h2 class="text-3xl font-bold underline">Effect Hook</h2>
            <p>Count: {count}</p>
            <p>Quantity: {quantity}</p>
            <Button onClick={increment} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add to Cart
            </Button>
            <Button onClick={() =>{setQuantity(quantity - 1)}} class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Quantity
            </Button>
            
           <table class="border-collapse border border-gray-400 ...">
                <thead>
                    <tr>
                    <th class="border border-gray-300 ...">State</th>
                    <th class="border border-gray-300 ...">City</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td class="border border-gray-300 ...">Indiana</td>
                    <td class="border border-gray-300 ...">Indianapolis</td>
                    </tr>
                    <tr>
                    <td class="border border-gray-300 ...">Ohio</td>
                    <td class="border border-gray-300 ...">Columbus</td>
                    </tr>
                    <tr>
                    <td class="border border-gray-300 ...">Michigan</td>
                    <td class="border border-gray-300 ...">Detroit</td>
                    </tr>
                </tbody>
            </table>
            
        </>
    );
}