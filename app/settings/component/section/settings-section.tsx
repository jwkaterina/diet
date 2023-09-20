'use client'

import './section.css'

interface SettingsSectionProps {
    children: React.ReactNode;
}

export default function SettingsSection({ children }: SettingsSectionProps): JSX.Element {
    
    return (
        <div className="Settings__section">
            {children}
        </div>
    )
}