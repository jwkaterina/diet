'use client'

import CaloriesSection from './calories-section'

export default function CaloriesPlan(props: CaloriesPlanProps) {

    return (
        <>
            <CaloriesSection>
                <h2>Calories Plan</h2>
                <div className="Calories__plan">
                    <h3 className="header">Physical Activity</h3>
                    <h3 className="header">Maintain Weight</h3><h3 className="header"></h3>
                    <h3 className="title">Inactive:</h3>
                    <span className="data"></span>
                    <span className="data"></span>
                    <h3 className="title">Low Active:</h3>
                    <span className="data"></span>
                    <span className="data"></span>
                    <h3 className="title">Active:</h3>
                    <span className="data"></span>
                    <span className="data"></span>
                    <h3 className="title">High Active:</h3>
                    <span className="data"></span>
                    <span className="data"></span>
                </div>
            </CaloriesSection>
        </>
    )
}

export interface CaloriesPlanProps {
}