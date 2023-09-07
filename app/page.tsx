'use client'

import './portions-page.css'
import { useState } from 'react'
import { PortionsCheckedContext, Portions } from './context/food-context'
import { FruitGroup } from './component/food/group/category/fruit-group'
import { VeggiesGroup } from './component/food/group/category/veggies-group'
import { CarbsGroup } from './component/food/group/category/carbs-group'
import { ProtsGroup } from './component/food/group/category/prots-group'
import { FatsGroup } from './component/food/group/category/fats-group'
import { SweetsGroup } from './component/food/group/category/sweets-group'
import { ProgressBar } from './component/calories/progress/progress'
import { NavBar } from './layout/nav/nav-bar'

export default function Home() {
  const [portionsChecked, setPortionsChecked] = useState<Portions>({
    fruit: 0, 
    veggies: 0,
    carbs: 0,
    prots: 0,
    fats: 0,
    sweets: 0
  })

  return (
  <>
    <NavBar/>
    <div className="PortionsPage">
      <ProgressBar/>
      <PortionsCheckedContext.Provider value={{portionsChecked, setPortionsChecked}}>
        <FruitGroup/>
        <VeggiesGroup/>
        <CarbsGroup/>
        <ProtsGroup/>
        <FatsGroup/>
        <SweetsGroup/>
      </PortionsCheckedContext.Provider>
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
