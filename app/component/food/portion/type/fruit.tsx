import React, { FunctionComponent } from 'react';
import { PortionTypeProps } from './portion-type-props';
import { Portion } from '../portion';
import { PortionsCheckedContext } from '../../../../context/food-context';

export const Fruit: FunctionComponent<PortionTypeProps> = (props) => {
    const {portionsChecked, dispatch} = React.useContext(PortionsCheckedContext);

    const width = 118;
    const height = 202;
    const handlePortionClick = () => {
        if(props.index <= portionsChecked.fruit.checked) {
            dispatch({
                type: 'check',
                group: 'fruit',
                index: props.index - 1,
              }); 
        } else {
            dispatch({
                type: 'check',
                group: 'fruit',
                index: props.index,
              }); 
        }
    };
    return <Portion width={width} height={height} onclick={handlePortionClick} checked={portionsChecked.fruit.checked >= props.index}>
        <g className="portion">
            <g className="portion-left">
                <path d="M58.7561 44V54.7575L68.4261 44H58.7561Z"/>
                <path d="M58.7561 61.1026V95.1267L74.0161 78.09L58.7561 61.1026Z"/>
                <path d="M58.7561 135.606V101.473L74.0361 118.53L58.7561 135.606Z"/>
                <path d="M58.7561 141.963V176.156L74.0561 159.05L58.7561 141.963Z"/>
                <path d="M58.7561 201.98V182.535L75.8061 201.6H75.8161C73.9761 201.85 72.1061 201.98 70.2061 201.98H58.7561Z"/>
                <path d="M96.6261 52.87C89.9761 47.81 82.1061 44.65 73.6461 44.09L61.2161 57.93L76.6761 75.13L96.6261 52.87Z"/>
                <path d="M99.6661 55.39L99.6716 55.395L79.3361 78.09L94.8261 95.33L113.096 74.91C110.047 67.2625 105.409 60.5743 99.6716 55.395L99.6761 55.39H99.6661Z"/>
                <path d="M117.143 105.828L117.143 105.83C117.124 107.516 117.106 109.215 117.106 110.93L112.986 115.54L97.4661 98.27L114.586 79.14V79.15C117.333 88.0917 117.24 96.7849 117.143 105.828Z"/>
                <path d="M117.106 120.13V116.84L115.636 118.49L117.106 120.13Z"/>
                <path d="M117.106 126.03V149.04C117.106 152.66 116.776 156.2 116.166 159.62L97.4861 138.78L112.986 121.44L117.106 126.03Z"/>
                <path d="M79.3361 118.53L94.8361 135.83L110.336 118.5L94.8161 101.23L79.3361 118.53Z"/>
                <path d="M76.6861 115.58L61.2061 98.3L76.6761 81.04L92.1661 98.28L76.6861 115.58Z"/>
                <path d="M115.084 164.348L115.086 164.34V164.35L115.084 164.348Z"/>
                <path d="M94.8361 141.74L115.084 164.348C112.854 172.645 108.844 180.102 103.576 186.14L79.3461 159.06L94.8361 141.74Z"/>
                <path d="M61.2061 138.79L76.6961 156.1V156.11L92.1861 138.79L76.6861 121.49L61.2061 138.79Z"/>
                <path d="M100.856 189.01C95.0661 194.68 88.0461 198.78 80.3261 200.72L61.1961 179.33L76.6961 162.01L100.866 189.01H100.856Z"/>
                <path d="M100.756 13.0303L58.7561 43V0L65.4968 19.5455L100.756 13.0303Z"/>
            </g>
            <g className="portion-right">
                <path d="M17.7561 13.0303L58.7561 43V0L52.1758 19.5455L17.7561 13.0303Z"/>
                <path d="M58.7561 54.5675V43.81H50.5361C49.9361 43.81 49.3261 43.83 48.7261 43.85L58.5561 54.79L58.7561 54.5675Z"/>
                <path d="M58.7561 60.9126V94.9367L58.5561 95.16L43.0961 77.9L58.5561 60.69L58.7561 60.9126Z"/>
                <path d="M58.7561 135.417V101.283L58.5561 101.06L43.0761 118.34L58.5561 135.64L58.7561 135.417Z"/>
                <path d="M58.7561 141.773V175.966L58.5561 176.19L43.0561 158.86L58.5561 141.55L58.7561 141.773Z"/>
                <path d="M58.7561 182.345V201.79H46.8861C44.9961 201.79 43.1261 201.66 41.2861 201.41L58.5461 182.11L58.7561 182.345Z"/>
                <path d="M40.4461 74.95L21.7361 54.06C28.1761 48.98 35.7161 45.54 43.8461 44.31L55.9061 57.74L40.4461 74.95Z"/>
                <path d="M24.9461 98.08L40.4261 115.38L55.9061 98.1L40.4361 80.84L24.9461 98.08Z" />
                <path d="M22.3061 95.12L5.12607 75.92C8.37607 68.42 13.0461 61.83 18.7361 56.61L37.7961 77.88L22.3061 95.12Z"/>
                <path d="M24.9261 138.59L40.4161 155.91V155.9L55.9061 138.59L40.4261 121.29L24.9261 138.59Z"/>
                <path d="M22.2861 135.64L6.78607 118.31L22.3061 101.04L37.7861 118.34L22.2861 135.64Z"/>
                <path d="M0.00607339 110.74L4.13607 115.35L19.6461 98.09L3.50607 80.05C-0.0336947 90.1676 -0.0171753 98.3862 0.00297395 108.411C0.00451318 109.176 0.00607339 109.952 0.00607339 110.74Z"/>
                <path d="M36.7761 200.54C29.0561 198.6 22.0361 194.5 16.2461 188.83L40.4161 161.82L55.9161 179.15L36.7861 200.54H36.7761Z"/>
                <path d="M2.02607 164.15C4.25607 172.45 8.26607 179.91 13.5361 185.95L13.5461 185.94L37.7761 158.86L22.2861 141.54L2.02607 164.15Z"/>
                <path d="M0.956074 159.43L0.954392 159.421L19.6261 138.58L4.12607 121.25L0.00607339 125.84V148.85C0.00607339 152.467 0.335476 156.004 0.954392 159.421L0.946074 159.43H0.956074Z"/>
                <path d="M0.00607339 119.94V116.64L1.48607 118.29L0.00607339 119.94Z"/>
            </g>
        </g>
    </Portion>
};