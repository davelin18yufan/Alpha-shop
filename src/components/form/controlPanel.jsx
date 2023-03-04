import styles from "./controlPanel.module.css"
import { OrderContext } from "../../contexts/OrderContext"
import { CartContext } from "../../contexts/CartContext"
import { useContext } from "react"

function Button({ buttonStyle, stepStyle, step, onClick}){
  return(
    <button form="form" className={buttonStyle} onClick={onClick}>
      <p className={stepStyle}>{step}</p>
    </button>
  )
}


export default function ControlPanel({currentStep, setCurrentStep}) {
  //destructing object cause the OrderContext value is an object
  const {order} = useContext(OrderContext)
  const {cart} = useContext(CartContext)

  function handleNextStepClick(e){
    e.preventDefault()
    let total = 0
    cart.forEach(item => 
      total += item.price* item.quantity)
    if(currentStep < 3){
      setCurrentStep(currentStep + 1)
    }else{
     console.log("Payment Information" , order)
     console.log(`total: $${total}`)
    }
  }

  function handlePreviousStepClick(e){
    e.preventDefault()
    /* button disappear if currentStep < 1 */
    setCurrentStep(currentStep - 1)
  }


  return(
      <div className={styles.controlPanel}>
        {/* if currentStep is not FirstStep */}
        {currentStep !== 1 ?
          <Button
          buttonStyle={styles.previousBtn}
          stepStyle={styles.previousStep}
          step="上一步"
          /* 為何這邊尚未傳入事件處理，按下卻會自動重整 */
          onClick={handlePreviousStepClick}
          /> 
        : ""}
        <Button
          buttonStyle={styles.nextBtn}
          stepStyle={styles.nextStep}
          step={currentStep === 3 ? "確認下單" : "下一步"}
          onClick={handleNextStepClick}
        />
      </div>
  )
}