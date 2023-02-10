import styles from "./App.module.css"
import StepProgress from "./components/stepProgress.js"
import Steps from "./components/steps"
import ControlPanel from "./components/controlPanel"
import Cart from "./components/carts/cart"
import Icon from "./icons/icon"

function Header() {
  return(
    <header className={styles.siteHeader}>
      <div className={styles.headerContainer}>
        {/* navbar-toggle  */}
        <input id={styles.navbarToggle} className={styles.navbarToggle} type="checkbox" />
        <label htmlFor={styles.navbarToggle} className={styles.burgerContainer}>
          <div className={styles.iconToggle}>
            <Icon.Toggle />
          </div>
        </label>

        {/* <!-- navbar-menu --> */}
        <nav className={styles.navbarMenu}>
          <ul className={styles.navList} >
            <li className={styles.navItem}>
              <a className={styles.navLink} href="/">男款</a>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="/">女款</a>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="/">最新消息</a>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="/">客製商品</a>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="/">聯絡我們</a>
            </li>
          </ul>
          <ul className={styles.navIconList}>
            {/* <!-- search --> */}
            <li className={styles.navItem}>
              <div className={styles.navIcon}>
                <Icon.Search />
              </div>                              
            </li>
            {/* <!-- cart --> */}
            <li className={styles.navItem}>
              <div className={styles.navIcon}>
                <Icon.Cart />
              </div>
            </li>
            <li id="theme-toggle" className={styles.navItem}>
              {/* <!-- moon --> */}
              <div className={styles.navIcon}>
                <Icon.Moon />
              </div>               
              {/* <!-- sun --> */}
              <div className={styles.navIcon}>
                <Icon.Sun />
              </div>
            </li>
          </ul>
        </nav>

        {/* <!-- logo --> */}
        <a className={styles.headerLogoContainer} href="/">
          <Icon.Logo />
        </a>
      </div>
    </header>
  )
}

function App() {
  return (
    <>
    <Header />
    <main className={styles.main}>
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
    </main>
    </>
  );
}

export default App;
