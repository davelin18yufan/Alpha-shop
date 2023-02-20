import styles from "./controlPanel.module.css"


function Button({type, buttonStyle, stepStyle, step, onClick}){
  return(
    <button form="form" type={type} className={buttonStyle} onClick={onClick}>
      <p className={stepStyle}>{step}</p>
    </button>
  )
}


export default function ControlPanel({currentStep, setCurrentStep}) {

  function handleNextStepClick(e){
    e.preventDefault()
    if(currentStep < 3){
      setCurrentStep(currentStep + 1)
    }else{
      /* Submit */
      return
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