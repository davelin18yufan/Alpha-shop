import FirstStep from "./steps/firstStep"
import SecondStep from "./steps/secondStep"
import LastStep from "./steps/lastStep"
import styles from "./steps.module.css"

function DetailContainer({children}) {
  return(
    <div className={styles.detailContainer}>
      <form id="form" >
       {children}
      </form>
    </div>
  )
}

export default function Steps() {
  return(
    <div className={styles.stepsContainer}>
      <DetailContainer>
        <FirstStep />
        {/* <SecondStep /> */}
        {/* <LastStep /> */}
      </DetailContainer>
    </div>
  )
}