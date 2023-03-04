import styles from "./App.module.css"
import Header from "./components/Header"
import StepProgress from "./components/form/StepProgress"
import Steps from "./components/form/Steps"
import ControlPanel from "./components/form/ControlPanel"
import Cart from "./components/carts/Cart"
import { CartContextProvider } from "./contexts/CartContext"
import { OrderProvider} from "./contexts/OrderContext"


function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <CartContextProvider  >
          <OrderProvider >
            <h2 className={styles.checkTitle}>結帳</h2>
            <section className={styles.container}>
            <div className={styles.stepContainer}>
              <StepProgress />
              <Steps />
              <ControlPanel />
            </div>
            <div className={styles.cartContainer}>
              <Cart />
            </div>
            </section>
          </OrderProvider>
        </CartContextProvider>
      </main>
    </>
  );
}

export default App;
