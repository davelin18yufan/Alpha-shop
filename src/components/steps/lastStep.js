import styles from "./lastStep.module.css"

export default function LastStep(){
  return(
    <>
      <h4 className={styles.stepTitle}>付款資訊</h4>
      <div className={styles.paymentContainer}>        
          <div className={styles.paymentRow}>
            <label htmlFor="cardName">持卡人性名</label>
            <input type="text" id="cardName" name="cardName" placeholder="John Doe"></input>
          </div>
          <div className={styles.paymentRow}>
            <label htmlFor="card">卡號</label>
            <input type="text" id="card" name="card" pattern="[0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]" placeholder="1111-2222-3333-4444"></input>
          </div>
          <div className={styles.rowWrapper}>
            <div className={styles.paymentRow}>
              <label htmlFor="validDate">有效期限</label>
              <input type="text" id="validDate" name="validDate" pattern="[0-3][0-9]/[2-9][2-9]" placeholder="MM/YY"></input>
            </div>
            <div className={styles.paymentRow}>
              <label htmlFor="CVC">CVC / CCV</label>
              <input type="text" id="CVC" name="CVC" placeholder="123"></input>
            </div>
          </div>       
      </div>
    </>

  )
}