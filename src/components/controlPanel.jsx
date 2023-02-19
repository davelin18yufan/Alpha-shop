import styles from "./controlPanel.module.css"

function Button({type, buttonStyle, stepStyle, step}){
  return(
    <button form="form" type={type} className={buttonStyle}>
      <p className={stepStyle}>{step}</p>
    </button>
  )
}

export default function ControlPanel() {
  return(
      <div className={styles.controlPanel}>
        {/* <Button
          buttonStyle={styles.previousBtn}
          stepStyle={styles.previousStep}
          step="上一步"
        /> */}
        <Button
          buttonStyle={styles.nextBtn}
          stepStyle={styles.nextStep}
          step="下一步"
        />
        {/* <Button
          type="submit"
          buttonStyle={styles.nextBtn}
          step="確認下單"
        /> */}
      </div>
  )
}