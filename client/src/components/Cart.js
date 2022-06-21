import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { deleteFromCart, updateQtyInCart } from "../store/actions/order";
import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";
import "../stylePages/Cart.css";
export default function Cart() {

  let navigate=useNavigate();
  let dispatch = useDispatch();
  let cart = useSelector(state => state.o.cart);
  let [newCart, setNewCart] = useState([]);

  useEffect(() => {
    setNewCart(cart.map(item => { 
      return { ...item, show: false } 
    }));
  }, [])


  //   const deleteFromCartNow = (c) => {
  //   dispatch(deleteFromCart(c));
  //   console.log("success to delete from cart!!!")
  // }

  const finishOrderNow = () => {
    navigate("/finishOrder");
  }


  const changeQty = (item) => {
    dispatch(updateQtyInCart(item.code, item.qty))
    let n = newCart.map(item2 => {
      if (item.code == item2.code)
        return { ...item2, show: false }
      return item2;
    })
    setNewCart(n);
  }
  return (
    <>
      {newCart.map(item => {
        return <div key={item.code}>
          <div className="container mt-3">
            <div className="card" style={{ width: 400 + "px" }}>
              <img className="card-img-top" src={item.imageUrl} alt="Card image" style={{ width: 100 + "%" }} />
              <div className="card-body">
                <h4 className="card-title">{item.name}</h4>
                <p className="card-text">{item.subscribe}</p>
                {item.show ? <>
                  <input type="number" value={item.qty} onChange={(e) => {
                    let n = newCart.map(item2 => {
                      if (item.code == item2.code)
                        return { ...item2, qty: e.target.value }
                      return item2;
                    })
                    setNewCart(n);
                  }} />
                  <input type="button" value="עדכן כמות" onClick={() => changeQty(item)} />
                </> :
                  <>
                    <p>{item.qty} הכמות שנבחרה</p>
                    <input type="button" value="שינוי כמות" onClick={() => {
                      let n = newCart.map(item2 => {
                        if (item.code == item2.code)
                          return { ...item2, show: true }
                        return item2;
                      })
                      setNewCart(n);
                    }} />
                  </>
                }
                {/* <IconButton aria-label="delete">
                  <DeleteIcon onClick={() => deleteFromCartNow(item.code)} />
                </IconButton> */}
              </div>
            </div>
            <br />
          </div>
        </div>
      })}

   {newCart[0]!=null||newCart[0]!=undefined?<div>
  <input type="button" className="btnFinish" value="לסיום הזמנה" onClick={finishOrderNow}/>
   </div>:<></>}
    </>
  )
}




