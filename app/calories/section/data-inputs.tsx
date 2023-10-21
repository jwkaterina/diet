'use client'

import { useRef, useState } from 'react'
import CaloriesSection from './calories-section'
import { Gender, BodyData } from '../bmr-utils'
import { calculateBmi, getClassification, getRecommendation, getRange } from '../bmi-utils'

export interface DataInputsProps {
    setBmi: (bmi: number) => void;
    setStatus: (status: string) => void;
    setRange: (range: string) => void;
    setRecommendation: (recommendation: string) => void;
}

export default function DataInputs({ setBmi, setStatus, setRange, setRecommendation }: DataInputsProps): JSX.Element {

    const genderRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);
    const weightRef = useRef<HTMLInputElement>(null);
    const heightRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: any) => {
      
        e.preventDefault();

        const checkbox = genderRef.current as HTMLInputElement;
        const gender = checkbox.checked ? Gender.MALE : Gender.FEMALE;
        const ageInput = ageRef.current as HTMLInputElement;
        const weightInput = weightRef.current as HTMLInputElement;
        const heightInput = heightRef.current as HTMLInputElement;
        const age = parseInt(ageInput.value);
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value);
        if (isNaN(age) || isNaN(weight) || isNaN(height)) {
            console.log('Error: invalid input');
            return;
        }
        //TODO: validate input
        
        const body: BodyData = {
            weight: weight,
            height: height,
            age: age,
        };
        console.log(`submitted: age = ${age}, weight = ${weight}, height = ${height}, gender = ${gender}`);
        const bmi = calculateBmi(weight, height);
        setBmi(bmi);
        const weightClassification = getClassification(bmi);
        setStatus(weightClassification.class);
        const recommendation = getRecommendation(weightClassification, body);
        setRecommendation(recommendation);
        const range = getRange(body);
        setRange(range);
        console.log(`bmi = ${bmi}, recommendation = ${recommendation}, classification = ${weightClassification.class}, range = ${range}`);

    }

    return (
            <CaloriesSection>
                <h2>Data Inputs</h2>
                <form>
                    <div className="Calories__input">
                        <h3>Gender:</h3>
                        <div className="Calories__gender__control">
                            <h3>F</h3>
                            <label className="Calories__switch">
                                <input type="checkbox" ref={genderRef}></input>
                                <span className="Calories__switch-slider Calories__switch-round"></span>
                            </label>
                            <h3>M</h3>
                        </div>
                        <h3>Age (years):</h3>
                        <input type="number" name="age" placeholder="30" min="1" max="120" ref={ageRef}></input>
                        <h3>Weight (kg):</h3>
                        <input type="number" name="weight" placeholder="71.5" step="0.1" min="1.0"  max="300.0" ref={weightRef}></input>
                        <h3>Height (m):</h3>
                        <input type="number" name="height" placeholder="1.65" step="0.01" min="0.10" max="3.00" ref={heightRef}></input>
                    </div>
                    <input type="submit" className="btn btn-block" value="Calculate" onClick={handleSubmit}></input>
                </form>
            </CaloriesSection>
    )
}