import { useState } from 'react';
import validator from 'validator';
import './Signup.css';

export default function Signup(){
    const [user, setUser] = useState(
        {
        email: "", 
        password: ""
    })
    const [passwordStatus, changePassStatus] = useState();
    const [emailStatus, changeEmailStatus] = useState();

    function emailValidate(e){
        user.email = e.target.value;
        if(validator.isEmail(user.email)){
            changeEmailStatus(true);
        }else{
            changeEmailStatus(false);
        }
    }
    
    function passwordValidate(e){
        user.password = e.target.value
        if(user.password.length < 8){
            changePassStatus(false);
        }else{
            changePassStatus(true);
        }
    }
    function formValidate(e){
        e.preventDefault();
        console.log(user)
    }
    
    return(<>
    <form>
    <label>email:</label>
    <input type='email' id='email' placeholder='johndoe@example.com' name='email' onChange={emailValidate} required/> <br></br>
    {emailStatus ? <p>Email is good</p> : <p>Invalid Email</p>}
    <label>password:</label>
    <input type='password'placeholder='helloworld123' onChange={passwordValidate} required/><br></br>
    {passwordStatus ? <p>Password is good</p> : <p>Not Strong enough</p>}
    <button onClick={formValidate}>Sign Up</button>
    </form>

    </>)
    
}