import { } from '@mui/material/colors';
import * as React from 'react';
import { useDispatch } from "react-redux"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import "../stylePages/Register.css"
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { updateCurrentUser } from '../store/actions/user';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Register(props) {

    let navigate = useNavigate();
    let dispatch = useDispatch();
    let [user, setUser] = useState({
        name: "",
        password: "",
        city: null,
        tel: null,
        email: null,
    //   status: null
    });

    let [errors, setErrors] = useState({});

    const change = (e) => {
        console.log("function change")
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
            if (user.password.length >= 5)
                newErr.password = { message: "הסיסמא צריכה להכיל מינימום 5 תווים" };
            else
                newErr.password = { message: "" };
        }
        setErrors(newErr);
        return isFormValid;
    }

    const send = (e) => {
        console.log("send")
        e.preventDefault();
        if (!validation()) {
            console.log(errors);
            return;
        }
        else {
            /////////////////////////////////////////
            setUser({ ...user,age:90})
            console.log("the user is: "+user)
            console.log("user :"+user.age);
            axios.post("http://localhost:4000/user", user).then(res => {
                console.log("המשתמש נוסף בהצלחה");
                dispatch(updateCurrentUser(res.data));
                navigate("/home");
            }).catch(err => console.log("something broken!!"));
        }
    }
    return (
        <>
            <h1>Please Register!!</h1>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div className='form' >
                    <div>
                        <TextField
                            required
                            id="filled-required"
                            label="User Name"
                            defaultValue=""
                            variant="filled"
                            onChange={change}
                            name="name"
                            type="text"
                            color="secondary"
                        />
                        {errors.name && <div className="errorText">{errors.name.message}</div>}
                    </div>
                    <div>
                        <TextField
                            required
                            id="filled-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="filled"
                            onChange={change}
                            name="password"
                            color="secondary"
                        />
                        {errors.password && <div className="errorText">{errors.password.message}</div>}
                    </div>

                    <div>
                        <TextField
                            id="filled-read-only-input"
                            label="City"
                            defaultValue=""
                            // InputLabelProps={{
                            //     shrink: true,
                            // }}
                            variant="filled"
                            onChange={change}
                            name="city"
                            type="text"
                            color="secondary"
                        />
                    </div>
                    <div>
                        <TextField
                            id="filled-number"
                            label="Telephone"
                            // InputLabelProps={{
                            //     shrink: true,
                            // }}
                            variant="filled"
                            onChange={change}
                            name="tel"
                            type="text"
                            color="secondary"
                        />
                    </div>
                    <div>
                        <TextField
                            id="filled-number"
                            label="Email"
                            // InputLabelProps={{
                            //     shrink: true,
                            // }}
                            variant="filled"
                            onChange={change}
                            name="email"
                            type="email"
                            color="secondary"
                        />
                    </div>
                    {/* <TextField
          id="filled-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="filled"
        /> */}
                </div>
                <div>
                    {/* <Button onClick={send} variant="contained" endIcon={<SendIcon />}>
                    Send
                </Button> */}
                    <Button color="secondary" className="btn" onClick={send}>Register</Button>
                </div>
            </Box>
        </>
    );
}