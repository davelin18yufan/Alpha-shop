import styles from "./cart.module.css"
import items from "./items"

function CartItems(){
  const cartItems = items.map(item =>  
    <li className={styles.cartItemWrapper} key={item.id}>
        <img src={item.img} alt={item.name + "image"} className={styles.cartItemImage}></img>
        <div className={styles.cartItemDetail}>
          <div className={styles.cartItemLabel}>
            <p >{item.name}</p>
            <b >${item.price}</b>
          </div>
          <div className={styles.cartItemQuantity}>
            <p>{item.quantity}</p>
          </div>
        </div>
    </li>)
   return(
      <ul>{cartItems}</ul>
  )
}

function Freight(){
  return(
    <div className={styles.cartSummary}>
      <p>運費</p>
      <b>免費</b>
    </div>
  )
}

function Total(){
  let total = 0;
  items.forEach(item => {    
    total += item.price * item.quantity
    return total
  })
  return(
    <div className={styles.cartSummary}>
      <p>小計</p>
      <b>${total}</b>
    </div>
  )
}

export default function Cart(){
  return(
    <>
      <h5 className={styles.cartTitle}>購物籃</h5>
      <div className={styles.cartList} >
        <CartItems />
      </div>
      <Freight />
      <Total />
    </>
  )
}