import styles from "./cart.module.css";
import { CartContext } from "../../contexts/CartContext";
import {  useContext } from "react"


function CartItem({ item }) {
  const { handleCounterClick} = useContext(CartContext)
  //keep children component naive
  return (
    <ul>
      <li className={styles.cartItemWrapper} >
        <img
          src={item.img}
          alt={item.name + "image"}
          className={styles.cartItemImage}
        ></img>
        <div className={styles.cartItemDetail}>
          <div className={styles.cartItemLabel}>
            <p>{item.name}</p>
            <b>${item.price}</b>
          </div>
          <div className={styles.cartItemQuantity}>
            <p className={styles.counter} onClick={(e) => handleCounterClick(e, item)}>-</p>
            <p className={styles.quantityLabel}>{item.quantity}</p>
            <p className={styles.counter} onClick={(e) => handleCounterClick(e, item)}>+</p>
          </div>
        </div>
      </li>
    </ul>
  )
}

function Freight() {
  return (
    <div className={styles.cartSummary}>
      <p>運費</p>
      <b>免費</b>
    </div>
  );
}

function Total() {
  const {cart} = useContext(CartContext)
  let total = 0;
  //items decided by customer
  cart.forEach((item) => {
    total += item.price * item.quantity
    return total;
  });
  return (
    <div className={styles.cartSummary}>
      <p>小計</p>
      <b>${total}</b>
    </div>
  );
}

//keep logic and calculation stick with the states
//maintain simplicity and readable
export default function Cart() {
  //read state from context
  const {cart} = useContext(CartContext)

  return (
    <>
      <h5 className={styles.cartTitle}>購物籃</h5>
      <div className={styles.cartList}>
        {/* passing state hook down */}
        {cart.map((item) => (
          <CartItem 
            item={item} 
            key={item.id} 
          />
        ))}
      </div>
      <Freight />
      <Total />
    </>
  );
}
