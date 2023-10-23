'use client'

import './calories-section.css'

interface CaloriesSectionProps {
    children: React.ReactNode;
}

export default function CaloriesSection({ children }: CaloriesSectionProps): JSX.Element {

    return (
        <div className="Calories__section">
            { children }
        </div>
    )
}