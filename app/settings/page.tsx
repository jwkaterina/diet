'use client'

import './settings.css'

export default function Settings() {
    return (
    <div className=".SettingsPage"><div className="Settings__section"><h2>General</h2><div className="Settings__section-body Settings__general-grid"><h3 className="Settings__units-cell">Use Half Portions:</h3><label className="Settings__switch Settings__controls-cell"><input type="checkbox"></input><span className="Settings__switch-slider Settings__switch-round"></span></label><h3 className="Settings__units-cell">Automatic Portions Reset:</h3><label className="Settings__switch Settings__controls-cell"><input type="checkbox"></input><span className="Settings__switch-slider Settings__switch-round"></span></label></div></div><div className="Settings__section"><div className="Settings__section-title"><h2>Portions</h2><h2>1210 k</h2></div><div className="Settings__section-body Settings__portions-grid"><h3 className="Settings__portions-cell">FRUITS:</h3><div className="Settings__number-minus-btn Settings__portions-cell Settings__controls-cell"></div><h3 className="Settings__portions-cell Settings__count-cell">3</h3><div className="Settings__number-plus-btn Settings__portions-cell Settings__controls-cell"></div><h3 className="Settings__portions-cell">VEGGIES:</h3><div className="Settings__number-minus-btn Settings__portions-cell Settings__controls-cell"></div><h3 className="Settings__portions-cell Settings__count-cell">4</h3><div className="Settings__number-plus-btn Settings__portions-cell Settings__controls-cell"></div><h3 className="Settings__portions-cell">CARBS:</h3><div className="Settings__number-minus-btn Settings__portions-cell Settings__controls-cell"></div><h3 className="Settings__portions-cell Settings__count-cell">4</h3><div className="Settings__number-plus-btn Settings__portions-cell Settings__controls-cell"></div><h3 className="Settings__portions-cell">PROTS:</h3><div className="Settings__number-minus-btn Settings__portions-cell Settings__controls-cell"></div><h3 className="Settings__portions-cell Settings__count-cell">4</h3><div className="Settings__number-plus-btn Settings__portions-cell Settings__controls-cell"></div><h3 className="Settings__portions-cell">FATS:</h3><div className="Settings__number-minus-btn Settings__portions-cell Settings__controls-cell"></div><h3 className="Settings__portions-cell Settings__count-cell">3</h3><div className="Settings__number-plus-btn Settings__portions-cell Settings__controls-cell"></div><h3 className="Settings__portions-cell">SWEETS:</h3><div className="Settings__number-minus-btn Settings__portions-cell Settings__controls-cell"></div><h3 className="Settings__portions-cell Settings__count-cell">1</h3><div className="Settings__number-plus-btn Settings__portions-cell Settings__controls-cell"></div></div></div><div className="Settings__section"><h2>Progress Bar</h2><div className="Settings__section-body Settings__time-grid"><h3 className="Settings__time-cell">First Meal At:</h3><div className="Settings__number-minus-btn Settings__time-cell Settings__controls-cell"></div><h3 className="Settings__time-cell Settings__count-cell">8</h3><div className="Settings__number-plus-btn Settings__time-cell Settings__controls-cell"></div><h3 className="Settings__time-cell">Last Meal At:</h3><div className="Settings__number-minus-btn Settings__time-cell Settings__controls-cell"></div><h3 className="Settings__time-cell Settings__count-cell">9</h3><div className="Settings__number-plus-btn Settings__time-cell Settings__controls-cell"></div><h3 className="Settings__time-cell">Daily Meals Number:</h3><div className="Settings__number-minus-btn Settings__time-cell Settings__controls-cell"></div><h3 className="Settings__time-cell Settings__count-cell">5</h3><div className="Settings__number-plus-btn Settings__time-cell Settings__controls-cell"></div></div></div></div>
    )
}