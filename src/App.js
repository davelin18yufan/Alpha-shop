import styles from "./App.module.css"
import  StepProgress from "./components/stepProgress.js"
import Steps from "./components/steps"
import ControlPanel from "./components/controlPanel"

function Header() {
  return(
    <header className={styles.siteHeader}>
      <div className={styles.headerContainer}>
        {/* navbar-toggle  */}
        <input id={styles.navbarToggle} className={styles.navbarToggle} type="checkbox" />
        <label for={styles.navbarToggle} className={styles.burgerContainer}>
          <svg className={styles.iconToggle}>
            <use xlinkHref="#svg-icon-toggle"></use>
          </svg>
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
          <ul className={styles.navList}>
            {/* <!-- search --> */}
            <li className={styles.navItem}>
              <svg className={styles.navIcon}>
                <use xlinkHref="#svg-icon-search"></use>
              </svg>                              
            </li>
            {/* <!-- cart --> */}
            <li className={styles.navItem}>
              <svg className={styles.navIcon}>
                <use xlinkHref="#svg-icon-cart"></use>
              </svg>
            </li>
            <li id="theme-toggle" className={styles.navItem}>
              {/* <!-- moon --> */}
              <svg className={styles.navIcon}>
                <use xlinkHref="#svg-icon-moon"></use>
              </svg>               
              {/* <!-- sun --> */}
              <svg classNameName={styles.navIcon}>
                <use xlinkHref="#svg-icon-sun" />
              </svg>
            </li>
          </ul>
        </nav>

        {/* <!-- logo --> */}
        <a className={styles.headerLogoContainer} href="/">
          <svg className="icon-logo cursor-point">
            <use xlinkHref="#svg-icon-logo"></use>
          </svg>
        </a>
      </div>
    </header>
  )
}

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.stepContainer}>
        <StepProgress />
        <Steps />
        <ControlPanel />
      </div>
    </div>
  );
}

export default App;
