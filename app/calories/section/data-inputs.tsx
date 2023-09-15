'use client'

import CaloriesSection from './calories-section'

export default function DataInputs(props: DataInputsProps) {

    return (
            <CaloriesSection>
                <h2>Data Inputs</h2>
                <form>
                    <div className="Calories__input">
                        <h3>Gender:</h3>
                        <div className="Calories__gender__control">
                            <h3>F</h3>
                            <label className="Calories__switch">
                                <input type="checkbox"></input>
                                <span className="Calories__switch-slider Calories__switch-round"></span>
                            </label>
                            <h3>M</h3>
                        </div>
                        <h3>Age (years):</h3>
                        <input type="number" name="age" placeholder="30" min="1" max="120"></input>
                        <h3>Weight (kg):</h3>
                        <input type="number" name="weight" placeholder="71.5" step="0.1" min="1.0"  max="300.0"></input>
                        <h3>Height (m):</h3>
                        <input type="number" name="height" placeholder="1.65" step="0.01" min="0.10" max="3.00"></input>
                    </div>
                    <input type="submit" className="btn btn-block" value="Calculate"></input>
                </form>
            </CaloriesSection>
    )
}

export interface DataInputsProps {

}