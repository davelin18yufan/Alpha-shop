import { createContext, useState } from "react"

//dummy data
const items = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
]

export const CartContext = createContext(items)

//cart state here
export function CartContextProvider({children}){
  const [cart, setCart] = useState(items)

  function handleCounterClick(e, target){
    let nextCart = cart.map(listItem => {
      if(listItem.id === target.id){
        if(e.target.textContent === "+"){
          return {
            ...listItem,
            quantity: listItem.quantity + 1
          }
        }else if(e.target.textContent === "-"){
          return {
            ...listItem,
            quantity: listItem.quantity - 1
            }
        }
      }else{
          return listItem
      }
    })
      //if quantity < 0, remove
    nextCart = nextCart.filter(item => item.quantity > 0)
    setCart(nextCart)
  }
   
  return(
  <CartContext.Provider 
    value={{
      cart,
      setCart,
      handleCounterClick
      }}>
        {children}
  </CartContext.Provider>
  )
}

//Provide State of cart
//Provide event handler of cart quantity control