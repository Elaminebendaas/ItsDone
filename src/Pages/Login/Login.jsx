import { useState } from 'react'
import './Login.css'


export default function Login(){
    const [user, setUser] = useState({
        email: "",
        password: ""
    })


    async function userLogin(e){
        e.preventDefault();
        console.log(JSON.stringify(user))
        const response = await fetch('http://localhost:5000/login',{
                method: "POST",
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                }

        })
        console.log(response)

    
}



    return(<>
    <form>
        <label>E-mail:</label>
        <input type='email' name='email' placeholder='johndoe@example.com' onChange={(e) => { user.email = e.target.value}} required/> <br></br>

        <label>Password:</label>
        <input type='password' name='password' placeholder='Your Password' onChange={(e) => { user.password = e.target.value}} required/> <br></br>

        <button onClick={userLogin}>Log In</button>


    </form>
    <a href='/signup'>Sign Up</a>
    </>)
}