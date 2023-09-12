import React, { FunctionComponent } from 'react';
import { PortionTypeProps } from './portion-type-props';
import { Portion } from '../portion';
import { PortionsContext, Group } from '../../../../context/food-context';

export const Sweets: FunctionComponent<PortionTypeProps> = (props) => {
    const checked = React.useContext(PortionsContext).portions.sweets.checked;

    const width = 72;
    const height = 92;

    return <Portion width={width} height={height} group={Group.SWEETS} index={props.index} checked={checked}>
        <g className="portion">
            <g className="portion-left">
                <path d="M36.4 65.0464V91H20.6C17.2 91 14.2 88.9 12.9 85.8L4.4 64.7C5.2 64.9 6 65 6.8 65C9.8 65 12.6 63.5 14.2 61C14.8 62 15.7 62.9 16.8 63.6C20.9 66.3 26.4 65.1 29 61C29.6 62 30.5 62.9 31.6 63.6C33.0845 64.5776 34.7525 65.0439 36.4 65.0464Z"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M36.4 28.5668C35.2313 28.5764 34.0449 28.3628 32.9 27.9C30.6 27 28.8 25.1 27.8 22.8C12.5 26.6 1.6 40.1 1 55.8C1 55.8 1.4 62 6.7 62C9.9 61.9 12.5 59.3 12.4 56.1V55.9C12.4 55.1 13.1 54.4 13.9 54.4C14.7 54.4 15.4 55.1 15.4 55.9V56.1C15.4 59.4 18.1 62.1 21.4 62.1C24.7 62.1 27.4 59.4 27.4 56.1V55.9C27.4 55.1 28.1 54.4 28.9 54.4C29.7 54.4 30.4 55.1 30.4 55.9V56.1C30.4 59.4 33.1 62.1 36.4 62.1L36.4 52.5899C36.1141 52.8203 35.757 52.9 35.4 52.9C35 52.9 34.7 52.8 34.4 52.5L30.5 48.6C30 47.9 30.1 47 30.8 46.5C31.3 46.1 32.1 46.1 32.6 46.5L36.4 50.3V36.8965L35.1 34.7C34.7 34 34.9 33.1 35.6 32.6C35.8431 32.4611 36.1223 32.4066 36.4 32.424V28.5668ZM8.4 46.9C6.4 46.9 6.4 50.9 8.4 50.9C9.5 50.9 10.4 50 10.4 48.9C10.4 47.8 9.5 46.9 8.4 46.9ZM10.4 40.1C8.4 40.1 8.4 44.1 10.4 44.1C11.5 44.1 12.4 43.2 12.4 42.1C12.4 41 11.5 40.1 10.4 40.1ZM28.4 28.2C28.4 27.1 27.5 26.2 26.4 26.2C25.3 26.2 24.4 27.1 24.4 28.2C24.4 29.3 25.3 30.2 26.4 30.2C27.5 30.2 28.4 29.3 28.4 28.2ZM13.5 34.5C13.5 35.3 14.2 36 15 36H18.9C19.7 36 20.4 35.3 20.4 34.5C20.4 33.7 19.7 33 18.9 33H15C14.2 33 13.5 33.7 13.5 34.5ZM17.7 46.9L22.6 44C23.3 43.5 23.5 42.6 23.1 41.9C22.6 41.2 21.7 41 21 41.4L16.2 44.3C15.5 44.7 15.2 45.7 15.6 46.4C15.9 46.8 16.4 47.1 16.9 47.1L17.7 46.9ZM23.4 51.1C23.4 52.2 24.3 53.1 25.4 53.1C27.4 53.1 27.4 49.1 25.4 49.1C24.3 49.1 23.4 50 23.4 51.1ZM27.4 35.2C25.4 35.2 25.4 39.2 27.4 39.2C28.5 39.2 29.4 38.3 29.4 37.2C29.4 36.1 28.5 35.2 27.4 35.2Z"/>
                <path d="M36.4 13.0816L36.4 25.6C35.9 25.7 35.3 25.7 34.8 25.6C31.3 25.2 28.9 22.1 29.3 18.6C29.7 15.1 32.8 12.7 36.3 13.1C36.3329 13.0934 36.3663 13.0873 36.4 13.0816Z"/>
            </g>
            <g className="portion-right">
                <path d="M36.4 25.6127L36.4 13.0942C36.8786 13.0131 37.4329 13.0193 37.9 13.1127C41.4 13.5127 43.8 16.6127 43.4 20.1127C43 23.6127 39.9 26.0127 36.4 25.6127Z"/>
                <path d="M36.4 91.0127V65.0591C39.3026 65.0635 42.1414 63.6282 43.8 61.0127C45.4 63.5127 48.2 65.0127 51.2 65.0127C54.2 65.0127 56.9 63.5127 58.6 61.0127C60.2 63.5127 63 65.0127 66 65.0127C66.8 65.0127 67.6 64.9127 68.3 64.7127L59.8 85.8127C58.6 88.9127 55.6 91.0127 52.2 91.0127H36.4Z"/>
                <path d="M36.4 62.1127L36.4 52.6026C36.4344 52.5748 36.4678 52.5449 36.5 52.5127L36.6 52.4127C37.1 51.8127 37.1 50.9127 36.5 50.4127L36.4 50.3127V36.9092L38 39.6127C38.3 40.0127 38.8 40.3127 39.3 40.3127L40.1 40.1127C40.8 39.6127 41 38.7127 40.6 38.0127L37.7 33.2127C37.4389 32.7557 36.9221 32.4692 36.4 32.4366V28.5795C40.029 28.5497 43.4872 26.3678 45 22.8127C60.2 26.7127 71.1 40.0127 71.8 55.7127V56.3127C71.8 59.5127 69.2 62.0127 66.1 62.0127C62.9 61.9127 60.3 59.3127 60.4 56.1127V55.9127C60.4 55.1127 59.7 54.4127 58.9 54.4127C58.1 54.4127 57.4 55.1127 57.4 55.9127V56.1127C57.4 59.4127 54.7 62.1127 51.4 62.1127C48.1 62.1127 45.4 59.4127 45.4 56.1127V55.9127C45.4 55.1127 44.7 54.4127 43.9 54.4127C43.1 54.4127 42.4 55.1127 42.4 55.9127V56.1127C42.4 59.4127 39.7 62.1127 36.4 62.1127ZM40.4 43.9127C38.4 43.9127 38.4 47.9127 40.4 47.9127C41.5 47.9127 42.4 47.0127 42.4 45.9127C42.4 44.8127 41.5 43.9127 40.4 43.9127ZM48.4 42.0127C48.4 43.1127 49.3 44.0127 50.4 44.0127C51.5 44.0127 52.4 43.1127 52.4 42.0127C52.4 40.9127 51.5 40.0127 50.4 40.0127C49.3 40.0127 48.4 40.9127 48.4 42.0127ZM45.3 35.2127C45.5 35.4127 45.8 35.4127 46.1 35.4127C46.6 35.4127 47.1 35.1127 47.4 34.7127L50.3 29.8127C50.7 29.1127 50.5 28.2127 49.8 27.8127C49.1 27.4127 48.2 27.6127 47.7 28.3127L44.8 33.2127C44.4 33.9127 44.6 34.8127 45.3 35.2127ZM50.1 54.4127L54 50.6127C54.6 50.0127 54.6 49.0127 54 48.4127C53.4 47.9127 52.5 47.9127 51.9 48.4127L47.9 52.4127C47.4 53.0127 47.4 53.9127 48 54.4127C48.2 54.7127 48.6 54.9127 49 54.9127C49.4 54.9127 49.8 54.7127 50.1 54.4127ZM55.4 33.8127C55.4 34.9127 56.3 35.8127 57.4 35.8127C59.4 35.8127 59.4 31.8127 57.4 31.8127C56.3 31.8127 55.4 32.7127 55.4 33.8127ZM62.9 49.1127C63.7 49.1127 64.4 48.4127 64.4 47.6127V42.7127C64.4 41.9127 63.7 41.2127 62.9 41.2127C62.1 41.2127 61.4 41.9127 61.4 42.7127V47.6127C61.4 48.4127 62.1 49.1127 62.9 49.1127ZM65.4 54.0127C65.4 55.1127 66.3 56.0127 67.4 56.0127C69.4 56.0127 69.4 52.0127 67.4 52.0127C66.3 52.0127 65.4 52.9127 65.4 54.0127Z"/>
                <path d="M38.1 10.9127H37.6C36.8 10.6127 36.4 9.81268 36.7 9.01268C37.7 6.21268 40.9 1.61268 45.4 1.01268C46.2 0.912679 46.9 1.41268 47.1 2.21268C47.2 3.01268 46.6 3.81268 45.8 3.91268C42.8 4.31268 40.3 7.71268 39.6 9.91268C39.4 10.5127 38.8 10.9127 38.1 10.9127Z"/>
            </g>
        </g>
    </Portion>
};