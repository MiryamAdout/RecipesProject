import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductFromSharat, deleteProduct } from "../store/actions/product";
import { addToCart } from "../store/actions/order";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';

import "../stylePages/Home.css";

export default function Home() {
  let currentUser = useSelector(state => state.u.currentUser);

  const [productsArr, setProductsArr] = useState([]);

  let dispatch = useDispatch();//מעדכן את הסטייט-רידוסר
  let qty = 1;

  // const deleteProductNow = (code) => {
  //   axios.delete("http://localhost:4000/product/?code=" + code).then(res => {
  //     dispatch(deleteProduct(code));
  //     console.log("delete!!");
  //     // dispatch(getProductFromSharat(rs.data));
  //   })
  // }

  useEffect(() => {
    axios.get("http://localhost:4000/product").then(res => {
      dispatch(getProductFromSharat(res.data));//מעדכן את הנתונים ושולח מהשרת את המוצרים שבשרת
      setProductsArr(res.data);
    })
  }, [])

  const calcQty = (e) => {
    qty = e.target.value;
  }

  const addToCartNow = (item) => {
    dispatch(addToCart(item, qty))
    console.log("success addToCart")
    qty = 1;
  }

  return (
    <>
      <div>
        {currentUser.name && <h2 className="nav-item">
          <label>{currentUser.name}  שלום לך מנהל </label>
        </h2>}
      </div>
      <div className="allCard">
        {productsArr.map(item => {
          return <div key={item.code} >
            <div className="container mt-3 oneCard">
              <div className="card" style={{ width: 400 + "px" }}>
                <img className="card-img-top" src={item.imageUrl} alt="Card image" style={{ width: 100 + "%" }} />
                <div className="card-body">
                  <h4 className="card-title">{item.name}</h4>
                  <p className="card-text">{item.subscribe}</p>
                  <p className="card-text"><b>מחיר:</b>   {item.price}  ש"ח </p>
                  <div className="input-group">
                    <b>  <p>    בחר כמות: </p> </b>
                    <input type="number" className="inp" min={1} onChange={calcQty} />
                    <IconButton color="secondary" aria-label="add to shopping cart" >
                      <AddShoppingCartIcon onClick={() => addToCartNow(item)} className="cartBtn" />
                    </IconButton>
                  </div >
                  {/* {currentUser.status == "manager" && */}
                    {/* <Button id="deleteProdButton" variant="outlined" onClick={() => deleteProductNow(item.code)} startIcon={<DeleteIcon />}>
                     Delete
                 </Button>} */}
                  {/* <input type="button" value="הוסף לסל" onClick={() => addToCartNow(item)} /> */}
                  <br />
                </div>
              </div>
              <br />
            </div>
          </div>
        })}
      </div>
    </>
  )
}
