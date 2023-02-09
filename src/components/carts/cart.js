import styles from "./cart.module.css";
import items from "./items";

function CartItem({ item }) {
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
            <p>{item.quantity}</p>
          </div>
        </div>
      </li>
    </ul>
  )
}

function CartList({ items }) {
  return (
    <div className={styles.cartList}>
      {items.map((item) => (
        <CartItem item={item} key={item.id}/>
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

function Total() {
  let total = 0;
  items.forEach((item) => {
    total += item.price * item.quantity;
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
  return (
    <>
      <h5 className={styles.cartTitle}>購物籃</h5>
      <div className={styles.cartList}>
        <CartList items={items} />
      </div>
      <Freight />
      <Total />
    </>
  );
}
