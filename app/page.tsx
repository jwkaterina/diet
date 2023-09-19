'use client'

import styles from './page.module.css'
import FruitGroup from './component/food/group/category/fruit-group'
import VeggiesGroup from './component/food/group/category/veggies-group'
import CarbsGroup from './component/food/group/category/carbs-group'
import ProtsGroup from './component/food/group/category/prots-group'
import FatsGroup from './component/food/group/category/fats-group'
import SweetsGroup from './component/food/group/category/sweets-group'
import ProgressBar from './component/progress/progress'
import { useEffect } from 'react'
import { useSettings, useSettingsDispatch } from './context/settings-context'
import { usePortionsDispatch } from './context/portions-context'

export default function Home() {

  const settings = useSettings();
  const settingsDispatch = useSettingsDispatch();
  const portionsDispatch = usePortionsDispatch();

  const portionCalories: Calories = {
    fruit: 60,
    veggies: 25,
    carbs: 70,
    prots: 110,
    fats: 45,
    sweets: 75
  }

  useEffect(() => {
    if(new Date().toDateString() !== settings.timeStamp) {
      settingsDispatch({
        type: 'setTimeStamp',
        timeStamp: new Date().toDateString()
      }); 
      console.log(settings.timeStamp)

      if(settings.autoReset) {
        portionsDispatch({
          type: 'clear',
        });
      }
    } else return
  });

  return (
  <>
    <div className={styles.Portions_page}>
      <ProgressBar calories={portionCalories}/>
      <FruitGroup calories={portionCalories.fruit}/>
      <VeggiesGroup calories={portionCalories.veggies}/>
      <CarbsGroup calories={portionCalories.carbs}/>
      <ProtsGroup calories={portionCalories.prots}/>
      <FatsGroup calories={portionCalories.fats}/>
      <SweetsGroup calories={portionCalories.sweets}/>
    </div>
  </>
  )
}

export type Calories = {
  fruit: number,
  veggies: number,
  carbs: number,
  prots: number,
  fats: number,
  sweets: number
}
