import {useState, useRef} from 'react';
export default function Registration(){

    //Controlled Components
    //State variables to hold the form input values
    const [username, setUsername] = useState(""); //Controlled Component for username
    const [password, setPassword] = useState("");  //Controlled Component for password
    const [confirmPassword, setConfirmPassword] = useState("");  

    const [finalUsername, setFinalUsername] = useState(""); //Controlled Component for username
    const [finalAge, setFinalAge] = useState(""); //Controlled Component for age
    const [finalEmail, setFinalEmail] = useState(""); //Controlled Component for email
    const [finalPassword, setFinalPassword] = useState(""); //Controlled Component for password
    const [finalConfirmPassword, setFinalConfirmPassword] = useState(""); //Controlled Component for confirm password

    //Refrence for uncontrolled component
    const ageRef = useRef(null);
    const emailRef = useRef(null);



    function handleSubmit(e)
    {
        e.preventDefault(); //Page will not reload on form submission.

        setFinalUsername(username); //Accessing the value of username input using ref
        setFinalAge(ageRef.current.value); //Accessing the value of age input using ref
        setFinalEmail(emailRef.current.value); //Accessing the value of email input using ref
        setFinalPassword(password); //Accessing the value of password input using ref
        setFinalConfirmPassword(confirmPassword); //Accessing the value of confirm password input using ref
        

        alert("Form Submitted Successfully!");
    }

    return(
        <>
            <div>
                <h2>Registration Form</h2>
                <form onSubmit={handleSubmit}>

                    <label htmlFor="Fullname">Fullname:</label>
                    <input type="text" value={username} onChange={(e) => {setUsername(e.target.value); console.log(e.target.value);}} placeholder="Enter your fullname" required/>  
                    <br/>

                    <label htmlFor="age">Age:</label>
                    <input type="number" ref={ageRef} placeholder="Enter your age" required/>  
                    <br/>

                    <label htmlFor="email">Email:</label>
                    <input type="email" ref={emailRef} placeholder="Enter your email" required/> 
                    <br/>

                    <label htmlFor="password">Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required/> 
                    <br/>

                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm your password" required/> 
                    <br/>

                    <button>Register</button>

                    <h3>FullName : {finalUsername}</h3>
                    <h3>Age : {finalAge}</h3>
                    <h3>Email : {finalEmail}</h3>
                    <h3>Password : {finalPassword}</h3>
                    <h3>Confirm Password : {finalConfirmPassword}</h3>   
                </form>
            </div>
        </>
    )   
} 