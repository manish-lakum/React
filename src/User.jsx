//Passing props parameter as object
/*
export default function User(props) {
    return(
        <>
            <div>
                <h1>User Information</h1>
                <hr/>
                <h2>User Name : {props.name}</h2>
                <h2>User Age : {props.age}</h2>
            </div>
        </>
    )


export default function User({name,age}) {
    return(
        <>
            <div>
                <h1>User Information</h1>
                <hr/>
                <h2>User Name : {name}</h2>
                <h2>User Age : {age}</h2>
            </div>
        </>
    )
}

}*/

export default function User({name,age,hobbies}) {
    return(
        <>
            <div>
                <h1>User Information</h1>
                <hr/>
                <h2>User Name : {name}</h2>
                <h2>User Age : {age}</h2>
                <ul>
                    {hobbies.map((hobby, index) => (
                        <li key={index}>{hobby}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}