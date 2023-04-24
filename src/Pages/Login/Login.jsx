import { useState } from 'react'
import './Login.css'


export default function Login(){
    const [user, setUser] = useState({
        email: "",
        password: ""
    })


    function userLogin(){

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