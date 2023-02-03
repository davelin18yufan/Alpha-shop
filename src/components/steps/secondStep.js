import styles from "./secondStep.module.css"


function Delivery({type, typeDetail, deliveryType}){
  return(
    <div className={styles.deliveryContainer}>
      <input type="radio" id={deliveryType} name="delivery" ></input>
      <label for={deliveryType} >{type}
        <p className={styles.typeDetail}>{typeDetail}</p>
      </label>
    </div>
  )

}

export default function SecondStep() {
  return(
    <>
      <h4 className={styles.stepTitle}>運送方式</h4>
      <div>
        <Delivery 
          type="標準運送"
          typeDetail="約3~7個工作天" 
          deliveryType="general"
        />
         <Delivery 
          type="DHL運送"
          typeDetail="48小時內送達" 
          deliveryType="DHL"
        />
      </div>
    </>
  )
}