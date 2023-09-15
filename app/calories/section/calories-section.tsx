'use client'

import './calories-section.css'

export default function CaloriesSection(props: CaloriesSectionProps) {

    return (
        <div className="Calories__section">
            {props.children}
        </div>
    )
}

export interface CaloriesSectionProps {
    children: React.ReactNode;
}