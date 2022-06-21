// import "./App.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { saveOrder } from "../store/actions/order";
import { useNavigate } from 'react-router-dom';
import "../stylePages/Login.css";
export default function FinishOrder() {
    let cart = useSelector(state => state.o.cart);
    let navigate = useNavigate();
    let dispatch = useDispatch();

    let [singleOrder, setSingleOrder] = useState({
        orderCode: null,
        userPassword: null,
        name: null,
        address: null,
        city: null,
        dueDate: null,
        cart: cart
    });


     let today=new Date();
     let today2=today.getDate() + '/' +(today.getMonth() + 1) + '/'+today.getFullYear() ;
    const randomalCode = () => {
        const num = parseInt(Math.random() * 9000 + 1000);
        const inp = "orderCode";
        console.log(num);
        /////////////////////////////////////////////////////////////////////////////
        setSingleOrder({ ...singleOrder, [inp]: num });
        console.log(singleOrder.orderCode);
    }



    const finishOrder = () => {
        randomalCode();
        dispatch(saveOrder(singleOrder));
        axios.post("http://localhost:4000/order", singleOrder).then(res => {
            console.log("finish order");
            alert("תודה שקנית אצלינו! נפגש בפעם הבאה!!");
            navigate("./home");
        }).catch(err => console.log("something broken!!"));
    }
    const change = (e) => {
        let inputName = e.target.name;
        let inputValue = e.target.value;
        setSingleOrder({ ...singleOrder, [inputName]: inputValue })
    }

    return (
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
                        label="Name"
                        defaultValue=""
                        variant="filled"
                        onChange={change}
                        name="name"
                        type="text"
                    />
                </div>
                <div>
                    <TextField
                        id="filled-password-input"
                        label="Address"
                        type="text"
                        autoComplete="current-password"
                        variant="filled"
                        onChange={change}
                        name="address"
                    />
                </div>

                <div>
                    <TextField
                        id="filled-read-only-input"
                        label="City"
                        defaultValue=""
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="filled"
                        onChange={change}
                        name="city"
                        type="text"
                    />
                </div>
                <div>
                    <TextField
                        id="filled-number"
                        label="Current Date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="filled"
                        onChange={change}
                        name="currentDate"
                        type="text"
                        value={today2}
                    />
                </div>
                <div>
                    <TextField
                        id="filled-number"
                        label="Due Date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="filled"
                        onChange={change}
                        name="dueDate"
                        type="date"
                    />
                </div>
            </div>
            <div>
                <Button onClick={finishOrder}  color="secondary" variant="contained" endIcon={<SendIcon />}>
                    Finish
                </Button>
            </div>
        </Box>
    )
}


