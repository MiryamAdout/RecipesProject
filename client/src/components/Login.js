import * as React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import "../stylePages/Login.css";
import Button from '@mui/material/Button';
import { updateCurrentUser } from '../store/actions/user';
export default function Login() {

    let [user, setUser] = useState({
        name: null,
        password: null
    }
    )
    let [errors, setErrors] = useState({});
    let navigate = useNavigate();
let dispatch=useDispatch();

    const change = (e) => {
        let inputName = e.target.name;
        let inputValue = e.target.value;
        setUser({ ...user, [inputName]: inputValue })
    }


    const validation = () => {
        let newErr = {};
        let isFormValid = true;
        if (!user.name || !user.name.trim()) {
            isFormValid = false;
            newErr.name = { message: "זהו שדה חובה" };
        }
        if (!user.password) {
            isFormValid = false;
            newErr.password = { message: "זהו שדה חובה" };
        }
        //חייב להכיל 5 תווים לפחות
        //לפחות-אות גדולה
        //אות קטנה
        //מספר
        if (user.password.length < 5 || !(/(?=[A-Z]{1})(?=[a-z]*)(?=[0-9]*)/.test(user.password))) {
            isFormValid = false;
            newErr.password = { message: "הסיסמא צריכה להכיל מינימום 5 תווים" };
        }
        setErrors(newErr);
        return isFormValid;
    }

    const send = (e) => {
        e.preventDefault();
        if (!validation()) {
            console.log("errror");
            return;
        }
        else {
            axios.post("http://localhost:4000/user/postLogin", user).then(res => {
                if (res.data){
                    navigate("/home");
                    dispatch(updateCurrentUser(res.data));
                }
                else{
                alert("שם משתמש או סיסמא שגוי")
                }          
            }).catch(err => {
                navigate("/register");
            })
        }
    }

    return (
        <>   
         <h1>Hello</h1>
            <form>                
                <div className="input-group">
                <span className="input-group-text">User Name</span>
                <input type="text" name="name" aria-label="First name" className="form-control" onChange={change} />
                {errors.name && <div>{errors.name.message}</div>}
                </div>
                <div className="input-group">
                <span className="input-group-text">User Password</span>
                <input type="password" name="password" aria-label="First name" className="form-control"  onChange={change}/>
                {errors.password && <div>{errors.password.message}</div>}            
                </div>
                <Button color="secondary" className="btn" type="submit" onClick={send}>Login</Button>
            </form>
            
        </>
    )
}