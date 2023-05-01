import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'
import { useDispatch } from 'react-redux'
import { addUser } from '../../GlobalState/LoggedInUser';

export default function Login(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
    })


    async function userLogin(e){
        e.preventDefault();
        const response = await fetch('http://localhost:5000/login',{
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }

        })
        const userID = JSON.stringify(await response.json())
        const parsed = JSON.parse(userID)

      
        dispatch(addUser(parsed.userID))
        navigate('/')
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