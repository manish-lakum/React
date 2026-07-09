/*function Footer(){
    return(
        <footer>
       <h2>SVGU @ 2026</h2> 
    </footer>
    )
    
}export default Footer;
*/

import { useState } from "react";

//export const userkey1 = "User456";
let isLoggedIn = "Not Logged in";
console.log("Login Status:", isLoggedIn);


export default function Footer()
{
    // const userkey = "User123";

//UseState Hook to manage the login status.
const [loginStatus, setLoginStatus] = useState("Not Logged in ");

    const Checked = () => {
        setLoginStatus("Logged in");
        console.log("Login Status:", loginStatus);
    }

    /*
    function checked(){
        isLoggedIn = "Loggend in";
        console.log("Login Status:", isLoggedIn);   
    }
    */

    function handle()
    {
        alert("Button click");
    }
    return(
        <>
            <div>
                <h2 style={{backgroundColor:'red'}}>SVGU @ 2026</h2>
                <br></br>
                <button onClick={handle}>Click Me</button><br></br>
                <span>Is LoggedIn :{loginStatus}</span><br></br>

                {/* 
                <input type="text" value={userkey} placeholder="Enter your username" />
                <input type="text" value={userkey1} placeholder="Enter your username" />

                */}

                <button onClick={Checked}>Login</button>
            </div>
        </>
        
    )
}