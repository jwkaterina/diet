'use client'

import CaloriesSection from './calories-section'

interface CaloriesSectionProps {
    bmi: number | string;
    status: string;
    range: string;
    recommendation: string;
}

export default function WeightAnalysis( { bmi, status, range, recommendation}: CaloriesSectionProps): JSX.Element {

    return (
        <>
            <CaloriesSection>
                <h2>Weight Analysis</h2>
                <div className="Calories__weight__data">
                    <h3 className="title">Body Mass Index (BMI):</h3>
                    <h3 className="data">{bmi ? bmi : ""}</h3>
                    <h3 className="title">Weight Status:</h3>
                    <h3 className="data">{status}</h3>
                    <h3 className="title">Normal Weight Range (kg):</h3>
                    <h3 className="data">{range}</h3>
                    <h3 className="title">Recommendation:</h3>
                    <h3 className="data">{recommendation}</h3>
                </div>
            </CaloriesSection>
        </>
    )
}