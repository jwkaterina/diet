import Image from 'next/image'
import styles from './page.module.css'
import './progress-bar.css'
import './progress-completed.css'
import './progress-exceeded.css'
import './progress-target.css'
import './component/food/group/portions-group.css'
import './nav-bar.css'
import './portions-page.css'
import './component/food/portion/portion.css'
import { FruitCategory } from './component/food/group/category/fruit-category'
import { VeggiesCategory } from './component/food/group/category/veggies-category'
import { CarbsCategory } from './component/food/group/category/carbs-category'
import { ProtsCategory } from './component/food/group/category/prots-category'
import { FatsCategory } from './component/food/group/category/fats-category'
import { SweetsCategory } from './component/food/group/category/sweets-category'

export default function Home() {
  return (
  <>
    <header>
      <div className="app-title">
        <span className="icon"></span>
        <h1> My Diet</h1>
      </div>
      <button className="menu-toggle" id="menu-toggle">
        <span className="hamburger"></span>
      </button>
      <div className="menu">
        <ul className="menu__list">
          <li className="menu__item">
            <a className="menu__link" href="#/">Main</a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#/calories">Calories</a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#/settings">Settings</a>
          </li>
          <li className="menu__item">
            <span className="menu__link">Clear Portions</span>
          </li>
        </ul>
      </div>
    </header>
    <div className="PortionsPage">
      <div className="ProgressBar">
        <div className="ProgressBar__completed"></div>
        <div className="ProgressBar__exceeded"></div>
        <div className="ProgressBar__calories">0 k</div>
      </div>
      <FruitCategory count={1}/>
      <VeggiesCategory count={1}/>
      <CarbsCategory count={1}/>
      <ProtsCategory count={1}/>
      <FatsCategory count={1}/>
      <SweetsCategory count={1}/>
    </div>
  </>

      // {/* <div className={styles.description}>
      //   <p>
      //     Get started by editing&nbsp;
      //     <code className={styles.code}>app/page.tsx</code>
      //   </p>
      //   <div>
      //     <a
      //       href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       By{' '}
      //       <Image
      //         src="/vercel.svg"
      //         alt="Vercel Logo"
      //         className={styles.vercelLogo}
      //         width={100}
      //         height={24}
      //         priority
      //       />
      //     </a>
      //   </div>
      // </div> */}
  )
}
