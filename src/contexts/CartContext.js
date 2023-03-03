import { createContext, useState } from "react"

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

export function CartContextProvider({children,currentStep, setCurrentStep}){
  const [cart, setCart] = useState(items)

 

  function handlePreviousStepClick(e){
    e.preventDefault()
    /* button disappear if currentStep < 1 */
    setCurrentStep(currentStep - 1)
  }
   return(
    <CartContextProvider 
      value={{
        cart,
        handlePreviousStepClick}}>
          {children}
    </CartContextProvider>
   )
}