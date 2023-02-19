import FirstStep from "./steps/firstStep"
import SecondStep from "./steps/secondStep"
import LastStep from "./steps/lastStep"
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

export default function Steps() {
  return(
    <StepContainer>
      <FirstStep />
      {/* <SecondStep /> */}
      {/* <LastStep /> */}
    </StepContainer>
  )
}