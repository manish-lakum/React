export default function Loop() {   

    //Array of users
    const users=["John", "Jane", "Alice", "Bob"]; 

    //Array of objects representing products
    const products=[
        {id:1, name:"Laptop", price:1000},
        {id:2, name:"Phone", price:500},
        {id:3, name:"Tablet", price:300}
    ];  

    return(
        <>
            <h2>Looping through an array of users</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>  


        <table border="1">
            <thead> 
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>${product.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>

        </>
    );
}
