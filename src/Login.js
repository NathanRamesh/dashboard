import React, { useState, useHistory } from 'react';
import { Link } from "react-router-dom";
import { fire } from './firebase-connection';
import avatar from './image/img_avatar2.png';
import './Login.css';


export default function Login(){
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");

    // const history = useHistory();   
    const submit = (e) => {
        e.preventDefault();
        let emailErr, pwdErr = true;
        if (email === "") {
            document.getElementById("emailErr").innerHTML = "Please enter the email";
        } else {
            document.getElementById("emailErr").innerHTML = "";
            emailErr=false;
        }
        if (password === "") {
            document.getElementById("pwdErr").innerHTML = "Please enter the password";
        } else {
            document.getElementById("pwdErr").innerHTML = "";
            pwdErr=false;
        }
        if ((emailErr || pwdErr) === true) {
            alert("Please fill all the details");
        } else {
            fire.auth().signInWithEmailAndPassword(email, password).then(() => {
                alert('Hi');
            })
        }
        
    }

    return (
        <div className='container col-md-6 pt-5'>
            <div className='form-group'>
            <div class="imgcontainer">
                <img src={avatar} alt="Avatar" class="avatar" />
            </div>
                <form>
                <div className='form-row mb-4'>
                    <label>Email</label>
                    <input type="email" className='form-control' id = "user-name" value={email} placeholder='Please enter email' onChange={(e) => setemail(e.target.value)}/>
                    <div className="invalid-feedback d-block" id='emailErr'></div>
                </div>
                <div className='form-row mb-4'>
                    <label>Password</label>
                    <input type="password" className='form-control' placeholder='Please enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div className="invalid-feedback d-block" id='pwdErr'></div>
                </div>
                <button type='submit' onClick={submit} className='btn btn-primary'>Login</button>
                <h4>OR</h4>
                    <Link to='/register'><button className='btn btn-info'>Create New Account</button></Link>
                </form>
            </div>
        </div>
    )
}