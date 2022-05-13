import React, { useState, useHistory } from 'react';
import { Link } from "react-router-dom";
import { fire } from './firebase-connection';
import { auth } from './firebase-connection';
import './Login.css';

export default function Register() {
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
   
    const Regsubmit = (e) => {
        e.preventDefault();
        let EmailErr, pwdErr = true;
        if (email === "") {
            document.getElementById("EmailErr").innerHTML = "Please enter the Email";
        } else {
            document.getElementById("EmailErr").innerHTML = "";
            EmailErr=false;
        }
        if (password === "") {
            document.getElementById("pwdErr").innerHTML = "Please enter the password";
        } else {
            document.getElementById("pwdErr").innerHTML = "";
            pwdErr=false;
        }
        if ((EmailErr || pwdErr) === true) {
            alert("Please fill all the details");
        } else {
            fire.auth().createUserWithEmailAndPassword(email, password).then(() => {
                alert("Your form has been successfully registered!..");

            })
        }
        email= "";
        password="";
    }
    return (
        <div className='container col-md-6 pt-5'>
            <div className='form-group'>
                <form class='reg-form'>
                <h2 className="mb-4">Register Form</h2>
                <div className='form-row mb-4'>
                    <label>Email</label>
                    <input type="email" className='form-control' id = "user-name" value={email} placeholder='Please enter email' onChange={(e) => setemail(e.target.value)}/>
                    <div className="invalid-feedback d-block" id='EmailErr'></div>
                </div>
                <div className='form-row mb-4'>
                    <label>Password</label>
                    <input type="password" className='form-control' placeholder='Please enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div className="invalid-feedback d-block" id='pwdErr'></div>
                </div>
                <button type='submit' onClick={Regsubmit} className='btn btn-primary'>Submit</button><br/>
                <Link to="/" className='text-black'>Back to Home</Link>
                </form>
            </div>
        </div>
    )    
}