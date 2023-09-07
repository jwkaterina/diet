import './progress-bar.css'
import './progress-completed.css'
import './progress-exceeded.css'
import './progress-target.css'

export const ProgressBar = () => {
    const Calories = 2000
    return  (
    <div className="ProgressBar">
        <div className="ProgressBar__completed"></div>
        <div className="ProgressBar__exceeded"></div>
        <div className="ProgressBar__calories">{Calories} k</div>
    </div>)
}