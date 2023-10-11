'use client'

import SettingsSection from './settings-section';
import PortionsCell from '../cells/portions-cell';
import { usePortions, usePortionsDispatch } from '../../../context/portions-context';
import { useCalories } from '@/app/context/calories-context';
import { Group } from '../../../context/portions-reducer';
import { calculateTarget } from '@/app/component/progress/utils';

import styles from './section.module.css'

export default function PortionsSection(): JSX.Element {
    const portions = usePortions();
    const dispatch = usePortionsDispatch();
    const calories = useCalories();

    const handlePlusClick = (group: Group) => {
        dispatch({
            type: 'add',
            group: group,
        });
    }

    const handleMinusClick = (group: Group) => {
        dispatch({
            type: 'reduce',
            group: group,
        });
    }

    const targetCalories = calculateTarget(portions, calories);

    return (
        <SettingsSection>
            <div className={styles.title}>
                <h2>Portions</h2>
                <h2>{targetCalories}</h2>
            </div>
            <div className={styles.grid}>
                <PortionsCell count={portions.fruit.number} onPlusClick={() => handlePlusClick(Group.FRUIT)} onMinusClick={() => handleMinusClick(Group.FRUIT)}>FRUITS:</PortionsCell>
                <PortionsCell count={portions.veggies.number} onPlusClick={() => handlePlusClick(Group.VEGGIES)} onMinusClick={() => handleMinusClick(Group.VEGGIES)}>VEGGIES:</PortionsCell>
                <PortionsCell count={portions.carbs.number} onPlusClick={() => handlePlusClick(Group.CARBS)} onMinusClick={() => handleMinusClick(Group.CARBS)}>CARBS:</PortionsCell>
                <PortionsCell count={portions.prots.number} onPlusClick={() => handlePlusClick(Group.PROTS)} onMinusClick={() => handleMinusClick(Group.PROTS)}>PROTS:</PortionsCell>
                <PortionsCell count={portions.fats.number} onPlusClick={() => handlePlusClick(Group.FATS)} onMinusClick={() => handleMinusClick(Group.FATS)}>FATS:</PortionsCell>
                <PortionsCell count={portions.sweets.number} onPlusClick={() => handlePlusClick(Group.SWEETS)} onMinusClick={() => handleMinusClick(Group.SWEETS)}>SWEETS:</PortionsCell>        
            </div>                
        </SettingsSection>
    )
}