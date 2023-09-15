'use client'

import CaloriesSection from './calories-section'

export default function WeightAnalysis(props: CaloriesSectionProps) {

    return (
        <>
            <CaloriesSection>
                <h2>Weight Analysis</h2>
                <div className="Calories__weight__data">
                    <h3 className="title">Body Mass Index (BMI):</h3>
                    <h3 className="data"></h3>
                    <h3 className="title">Weight Status:</h3>
                    <h3 className="data"></h3>
                    <h3 className="title">Normal Weight Range (kg):</h3>
                    <h3 className="data"></h3>
                    <h3 className="title">Recommendation:</h3>
                    <h3 className="data"></h3>
                </div>
            </CaloriesSection>
        </>
    )
}

export interface CaloriesSectionProps {

}