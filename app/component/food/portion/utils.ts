import { Dispatch } from 'react';
import { Group } from '../../../context/portions-reducer';

export const handleFullPortionClick = (index: number, checked: number, group: Group, dispatch: Dispatch<any>) => {
    if(index <= checked) {
        dispatch({
            type: 'check',
            group: group,
            checked: index - 1,
          }); 
    } else {
        dispatch({
            type: 'check',
            group: group,
            checked: index,
          }); 
    }
}

export const handleHalfPortionClick = (index: number, checked: number, group: Group, dispatch: Dispatch<any>) => {
    if(index <= checked / 2) {
        dispatch({
            type: 'check',
            group: group,
            checked: 2 * (index - 1),
          }); 
    } else if(index == checked / 2 + 0.5) {
        dispatch({
            type: 'check',
            group: group,
            checked: index * 2,
          }); 
    } else {
        dispatch({
            type: 'check',
            group: group,
            checked: index * 2 - 1,
          }); 
    }
}