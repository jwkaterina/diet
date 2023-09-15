'use client'

import styles from './page.module.css'
import { FruitGroup } from './component/food/group/category/fruit-group'
import { VeggiesGroup } from './component/food/group/category/veggies-group'
import { CarbsGroup } from './component/food/group/category/carbs-group'
import { ProtsGroup } from './component/food/group/category/prots-group'
import { FatsGroup } from './component/food/group/category/fats-group'
import { SweetsGroup } from './component/food/group/category/sweets-group'
import { ProgressBar } from './component/progress/progress'

export default function Home() {

  return (
  <>
    <div className={styles.Portions_page}>
      <ProgressBar/>
      <FruitGroup/>
      <VeggiesGroup/>
      <CarbsGroup/>
      <ProtsGroup/>
      <FatsGroup/>
      <SweetsGroup/>
    </div>
  </>
  )
}
