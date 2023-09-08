'use client'
import styles from './page.module.css'
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
    <div className={styles.main}>
      <PortionsCheckedContext.Provider value={{portionsChecked, setPortionsChecked}}>
        <ProgressBar/>
        <FruitGroup/>
        <VeggiesGroup/>
        <CarbsGroup/>
        <ProtsGroup/>
        <FatsGroup/>
        <SweetsGroup/>
      </PortionsCheckedContext.Provider>
    </div>
  </>
  )
}
