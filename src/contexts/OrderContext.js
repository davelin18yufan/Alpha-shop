import { createContext } from "react"
import { useState } from "react"

export const OrderContext = createContext(null)

export function OrderProvider({ children, currentStep }) {
  const [order, setOrder] = useState({
    //configure template for readability
    //skip 1 and 2
    1:{
      address: ""
    },
    2:{
      delivery: ""
    },
    3: {
        cardName: "",
        card: "",
        validDate: "",
        cvc: ""
      }
  })

  function handleInputChange(e){
    setOrder({
      ...order,
      [currentStep]: {
          ...order[currentStep],
          [e.target.name]: e.target.value  //object initializer
        }
    })
  }

  return(
    <OrderContext.Provider 
      value={{order, handleInputChange}}>
      {children}
    </OrderContext.Provider>
  )
}

//provide info of userInput  and input onChange event