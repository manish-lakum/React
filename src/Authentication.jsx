import { useState } from 'react';
export default function Login({ status, setStatus, username, setUsername }) {
    const [Temp, setTemp] = useState("");

    function checked() {
        setStatus(true);
        setUsername(Temp);
        console.log("Login Status:", status);
        console.log("Username:", Temp);
    }

    return (
        <>  
            <div>
                <h2>Login</h2>
                <h3>Welcome, {username}!</h3>
                <form>
                    <label htmlFor="username">Username:</label>
                    <input type="text" value={Temp} onChange={(e) => setTemp(e.target.value)} placeholder="Enter your username" required/>

                    <label htmlFor="password">Password:</label>
                    <input type="password" placeholder="Enter your password" />
                    <br></br>

                    <button onClick={checked}>Login</button>
                </form>
            </div>
        </>
    )
}1