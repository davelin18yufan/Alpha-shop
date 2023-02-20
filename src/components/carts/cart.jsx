import styles from "./cart.module.css";
import items from "./items";
import {useState} from "react"


function CartItem({ item, cart, setCart }) {

  function handlePlusCounterClick(){
    setCart(cart.map(listItem => {
      if(listItem.id === item.id){
        return {
          ...listItem,
          quantity: listItem.quantity + 1
        }
      }else{
        return listItem
      }
    }))
  }

    function handleMinusCounterClick(){
      let nextCart = cart.map(listItem => {
        if(listItem.id === item.id){
          return {
            ...listItem,
            quantity: listItem.quantity - 1
          }
        }else{
          return listItem
        }
      })
      //if quantity < 0, remove
      nextCart = nextCart.filter(item => item.quantity > 0)
      setCart(nextCart)
  }

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
            <p className={styles.counter} onClick={handleMinusCounterClick}>-</p>
            <p className={styles.quantityLabel}>{item.quantity}</p>
            <p className={styles.counter} onClick={handlePlusCounterClick}>+</p>
          </div>
        </div>
      </li>
    </ul>
  )
}

function CartList({ cart, setCart }) {
  return (
    <div className={styles.cartList}>
      {cart.map((item) => (
        <CartItem 
          item={item} 
          key={item.id} 
          //passing down to children
          cart={cart}
          setCart={setCart}/>
      ))}
    </div>
  );
}

function Freight() {
  return (
    <div className={styles.cartSummary}>
      <p>運費</p>
      <b>免費</b>
    </div>
  );
}

function Total({ cart }) {
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

export default function Cart() {
  //define here, passing to several children
  const [cart, setCart] = useState(items)

  return (
    <>
      <h5 className={styles.cartTitle}>購物籃</h5>
      <div className={styles.cartList}>
        {/* passing state hook down */}
        <CartList cart={cart} setCart={setCart}/>
      </div>
      <Freight />
      <Total cart={cart}/>
    </>
  );
}
