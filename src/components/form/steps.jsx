import FirstStep from "../steps/FirstStep"
import SecondStep from "../steps/SecondStep"
import LastStep from "../steps/LastStep"
import styles from "./steps.module.css"



function StepContainer({children}) {
  return(
    <div className={styles.stepContainer}>
      <form id="form" >
       {children}
      </form>
    </div>
  )
}



export default function Steps({currentStep}) {
  /* display depends on currentStep */
  return(
    <StepContainer>
      {currentStep === 1 && <FirstStep />}
      {currentStep === 2 && <SecondStep />}
      {currentStep === 3 && <LastStep />}
    </StepContainer>
  )
}