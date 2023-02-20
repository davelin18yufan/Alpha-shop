import styles from "./stepProgress.module.css"

function StepSign({num, progress, isChecked}) {
  return(
    <div className={isChecked}>
      <div className={styles.stepSign}>{num}</div>
      <span className={styles.progress}>{progress}</span>   
    </div>
  )
}

export default function StepProgress({currentStep}) {
  return(
    <div>
      
      <div className={styles.stepProgressContainer}>
        <StepSign 
          num= {currentStep > 1 ? "✔" : "1"}
          progress="寄送地址"
          /* Step one always display */
          isChecked={styles.stepChecked} 
        />
         <StepSign 
          num= {currentStep > 2 ? "✔" : "2"}
          progress="運送方式"
          isChecked={currentStep > 1 ? styles.stepChecked : styles.steps}
        />
         <StepSign 
         /* there isn't next step */
          num= "3"
          progress="付款資訊"
          isChecked={currentStep > 2 ? styles.stepChecked : styles.steps}
        />
      </div>
    </div>
    )
}
