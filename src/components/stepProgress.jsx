import styles from "./stepProgress.module.css"

function StepSign({num, progress}) {
  return(
    <a href="/" className={styles.steps}>
      <div className={styles.stepSign}>{num}</div>
      <span className={styles.progress}>{progress}</span>     
    </a>
  )
}

export default function StepProgress() {
  return(
    <div>
      
      <div className={styles.stepProgressContainer}>
        <StepSign 
          num= "1"
          progress="寄送地址"
        />
         <StepSign 
          num= "2"
          progress="運送方式"
        />
         <StepSign 
          num= "3"
          progress="付款資訊"
        />
      </div>
    </div>
    )
}
