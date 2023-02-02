import styles from "./steps.module.css"

function FirstStep(){
  return(
    <>
      <h4 className={styles.stepTitle}>寄送地址</h4>
      <form>
        <div className={styles.addressDetail}>
          <label for="gender" className={styles.labelSelect}>稱謂
            <select name="gender" id="gender" >
              <option value="male">先生</option>
              <option value="female">小姐</option>
            </select>
          </label>
          <label for="name" >姓名
              <input type="text" id="name" name="name" placeholder="請輸入姓名" className={styles.textInput}></input>
          </label>
        </div>
        <div className={styles.addressDetail}>
          <label for="phone" >電話
              <input type="text" id="phone" name="phone" placeholder="請輸入行動電話" className={styles.emailInput}></input>
          </label >
          <label for="email">Email
              <input type="email" id="email" name="email" placeholder="請輸入電子郵件" className={styles.emailInput}></input>
          </label>
        </div>
        <div className={styles.addressDetail}>
          <label for="gender" className={styles.labelSelect}>縣市
          <select name="gender" id="gender" >
            <option disabled selected>請選擇縣市</option>
            <option value="taipei">台北</option>
            <option value="taoyuan">桃園</option>
            <option value="new-taipei">新北</option>
            <option value="yilan">宜蘭</option>
          </select>
          </label>
          <label for="address">地址
            <input type="text" id="address" name="address" placeholder="請輸入地址" className={styles.textInput}></input>
          </label>
        </div>
      </form>
    </>
  )
}

export default function Steps() {
  return(
    <div className={styles.stepsContainer}>
      <FirstStep />
    </div>
  )
}