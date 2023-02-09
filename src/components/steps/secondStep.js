import styles from "./secondStep.module.css"

const deliveryTypes =[
  {
    type: "標準運送",
    typeDetail: "約3~7個工作天" ,
    level: "general"
  },
  {
    type: "DHL運送",
    typeDetail: "48小時內送達" ,
    level: "DHL"
  }
]

function Delivery({delivery}){
  return(
    <div className={styles.deliveryContainer}>
      <input type="radio" id={delivery.level} name="delivery" ></input>
      <label htmlFor={delivery.level} >{delivery.type}
        <p className={styles.typeDetail}>{delivery.typeDetail}</p>
      </label>
    </div>
  )

}

export default function SecondStep() {
  return(
    <>
      <h4 className={styles.stepTitle}>運送方式</h4>
      {deliveryTypes.map(delivery => 
        <Delivery delivery={delivery}  key={delivery.type}/>)}
    </>
  )
}