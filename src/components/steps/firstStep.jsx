import styles from "./firstStep.module.css"

export default function FirstStep(){
  return(
    <>
      <h4 className={styles.stepTitle}>寄送地址</h4>
      <div id="firstStep">
        <div className={styles.detailRow}>
          <label htmlFor="gender" className={styles.labelSelect}>稱謂
            <select name="gender" id="gender" >
              <option value="mr">先生</option>
              <option value="ms">小姐</option>
              <option value="mx">不明</option>
            </select>
          </label>
          <label htmlFor="name" >姓名
              <input type="text" id="name" name="name" placeholder="請輸入姓名" className={styles.textInput}></input>
          </label>
        </div>
        <div className={styles.detailRow}>
          <label htmlFor="phone" >電話
              <input type="text" id="phone" name="phone" placeholder="請輸入行動電話" className={styles.emailInput}></input>
          </label >
          <label htmlFor="email">Email
              <input type="email" id="email" name="email" placeholder="請輸入電子郵件" className={styles.emailInput}></input>
          </label>
        </div>
        <div className={styles.detailRow}>
          <label htmlFor="city" className={styles.labelSelect}>縣市
            <select name="city" id="city" defaultValue="default">
              <option disabled vale="default">請選擇縣市</option>
              <option value="KLU">基隆市</option>
              <option value="TPH">新北市</option>
              <option value="TPE">臺北市</option>
              <option value="TYC">桃園市</option>
              <option value="HSH">新竹縣</option>
              <option value="HSC">新竹市</option>
              <option value="MAC">苗栗市</option>
              <option value="MAL">苗栗縣</option>
              <option value="TXG">臺中市</option>
              <option value="CWH">彰化縣</option>
              <option value="CWS">彰化市</option>
              <option value="NTC">南投市</option>
              <option value="NTO">南投縣</option>
              <option value="YLH">雲林縣</option>
              <option value="CHY">嘉義縣</option>
              <option value="CYI">嘉義市</option>
              <option value="TNN">臺南市</option>
              <option value="KHH">高雄市</option>
              <option value="IUH">屏東縣</option>
              <option value="PTS">屏東市</option>
              <option value="ILN">宜蘭縣</option>
              <option value="ILC">宜蘭市</option>
              <option value="HWA">花蓮縣</option>
              <option value="HWC">花蓮市</option>
              <option value="TTC">臺東市</option>
              <option value="TTT">臺東縣</option>
              <option value="PEH">澎湖縣</option>
              <option value="KMN">金門縣</option>
              <option value="LNN">連江縣</option>
            </select>
          </label>
          <label htmlFor="address">地址
            <input type="text" id="address" name="address" placeholder="請輸入地址" className={styles.textInput}></input>
          </label>
        </div>
      </div>
    </>
  )
}

