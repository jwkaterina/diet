'use client'

import React, { FunctionComponent } from 'react';
import { PortionTypeProps } from './portion-type-props';
import { Portion } from '../portion';
import { PortionsContext, Group } from '../../../../context/food-context';

export const Carbs: FunctionComponent<PortionTypeProps> = (props) => {
    const checked = React.useContext(PortionsContext).portions.carbs.checked;

    const width = 48;
    const height = 51;

    return <Portion width={width} height={height} group={Group.CARBS} index={props.index} checked={checked}>
        <g className="portion">
            <g className="portion-left">
                <path d="M24 6.99986V49.677H5C4.44 49.677 4 49.227 4 48.677V19.257C1.52997 17.667 1 15.987 1 14.837C1 11.967 4.19 9.48697 9.75 8.03696C12.8 7.24698 16.34 6.83701 20 6.83701C21.3803 6.83701 22.7175 6.89289 24 6.99986ZM8.78979 13.5468C8.59937 13.727 8.49976 13.9867 8.49976 14.2568C8.49976 14.517 8.59937 14.7768 8.78979 14.9667C8.98022 15.1469 9.23022 15.2568 9.49976 15.2568C9.75952 15.2568 10.0203 15.1469 10.2 14.9667C10.3894 14.7768 10.4998 14.517 10.4998 14.2568C10.4998 13.9867 10.3894 13.727 10.2 13.5468C9.8396 13.1767 9.15991 13.1767 8.78979 13.5468ZM10.4998 44.2567C10.7595 44.2567 11.0203 44.1469 11.2 43.9569C11.3894 43.7768 11.4998 43.517 11.4998 43.2567C11.4998 42.9867 11.3894 42.727 11.2 42.5468C10.8298 42.1767 10.1697 42.1669 9.78979 42.5468C9.59937 42.7367 9.49976 42.9867 9.49976 43.2567C9.49976 43.517 9.59937 43.7768 9.78979 43.9569C9.98022 44.1469 10.2302 44.2567 10.4998 44.2567ZM10.4998 37.2567C10.7595 37.2567 11.0203 37.1469 11.2 36.9569C11.3894 36.7768 11.4998 36.517 11.4998 36.2567C11.4998 35.9867 11.3894 35.7367 11.2 35.5468C10.8396 35.1767 10.1599 35.1767 9.78979 35.5468C9.59937 35.7367 9.49976 35.9867 9.49976 36.2567C9.49976 36.517 9.59937 36.7768 9.78979 36.9667C9.98022 37.1469 10.2302 37.2567 10.4998 37.2567ZM11.4998 26.2568C11.7595 26.2568 12.0203 26.1469 12.2 25.9569C12.3894 25.7768 12.4998 25.517 12.4998 25.2568C12.4998 24.9867 12.3894 24.7367 12.2 24.5468C11.8396 24.1767 11.1599 24.1767 10.7898 24.5468C10.5994 24.7367 10.4998 24.997 10.4998 25.2568C10.4998 25.517 10.5994 25.7768 10.7898 25.9667C10.9802 26.1469 11.24 26.2568 11.4998 26.2568ZM13.7898 18.9569C13.9695 19.1469 14.2302 19.2568 14.4998 19.2568C14.7595 19.2568 15.0203 19.1469 15.2 18.9569C15.3894 18.7768 15.4998 18.517 15.4998 18.2568C15.4998 17.9867 15.3894 17.727 15.2 17.5468C14.8298 17.1767 14.1599 17.1767 13.7898 17.5468C13.5994 17.727 13.4998 17.9867 13.4998 18.2568C13.4998 18.517 13.5994 18.7768 13.7898 18.9569ZM15.7898 29.5468C15.5994 29.727 15.4998 29.9867 15.4998 30.2568C15.4998 30.517 15.5994 30.7768 15.7898 30.9569C15.9695 31.1469 16.2302 31.2568 16.4998 31.2568C16.7595 31.2568 17.0203 31.1469 17.2 30.9569C17.3894 30.7768 17.4998 30.517 17.4998 30.2568C17.4998 29.997 17.3894 29.7367 17.2 29.5468C16.8298 29.1767 16.1599 29.1767 15.7898 29.5468ZM17.4998 44.2567C17.7595 44.2567 18.0203 44.1469 18.2 43.9569C18.3894 43.7768 18.4998 43.517 18.4998 43.2567C18.4998 42.9867 18.3894 42.7367 18.2 42.5468C17.8396 42.1767 17.1501 42.1767 16.7898 42.5468C16.5994 42.727 16.4998 42.9867 16.4998 43.2567C16.4998 43.517 16.5994 43.7768 16.7898 43.9569C16.9695 44.1469 17.2302 44.2567 17.4998 44.2567ZM18.7898 13.9569C18.9695 14.1469 19.2302 14.2568 19.4998 14.2568C19.7595 14.2568 20.0203 14.1469 20.2 13.9569C20.3894 13.7768 20.4998 13.517 20.4998 13.2568C20.4998 12.9867 20.3894 12.727 20.2 12.5468C19.8396 12.1767 19.1599 12.1767 18.7898 12.5468C18.5994 12.727 18.4998 12.9867 18.4998 13.2568C18.4998 13.517 18.5994 13.7768 18.7898 13.9569ZM20.7898 26.5468C20.5994 26.727 20.4998 26.9867 20.4998 27.2568C20.4998 27.517 20.5994 27.7768 20.7898 27.9569C20.9695 28.1469 21.2302 28.2568 21.4998 28.2568C21.7595 28.2568 22.0203 28.1469 22.2 27.9667C22.3894 27.7768 22.4998 27.517 22.4998 27.2568C22.4998 26.9867 22.3894 26.727 22.2 26.5468C21.8298 26.1767 21.1599 26.1767 20.7898 26.5468ZM22.4998 37.2567C22.7595 37.2567 23.0203 37.1469 23.2 36.9569C23.3894 36.7768 23.4998 36.517 23.4998 36.2567C23.4998 35.9867 23.3894 35.727 23.2 35.5468C22.8298 35.1767 22.1599 35.1767 21.7898 35.5468C21.5994 35.727 21.4998 35.9867 21.4998 36.2567C21.4998 36.517 21.5994 36.7768 21.7898 36.9569C21.9695 37.1469 22.2302 37.2567 22.4998 37.2567ZM22.4998 21.2568C22.7595 21.2568 23.0203 21.1469 23.2 20.9667C23.3894 20.7768 23.4998 20.517 23.4998 20.2568C23.4998 19.9867 23.3894 19.7367 23.2 19.5468C22.8298 19.1767 22.1599 19.1767 21.7898 19.5468C21.5994 19.7367 21.4998 19.9867 21.4998 20.2568C21.4998 20.517 21.5994 20.7768 21.7898 20.9569C21.9695 21.1469 22.2302 21.2568 22.4998 21.2568Z"></path>
                <path d="M24 1V4.98935C22.7185 4.88887 21.383 4.83683 19.9998 4.83683C16.5527 4.83683 13.2256 5.20682 10.2654 5.8776C12.5016 3.36901 17.5537 1.53831 24 1Z"></path>
            </g>
            <g className="portion-right">
                <path d="M24 5.16594V1.16352C25.2819 1.05612 26.619 1 28 1C38.83 1 47 4.45127 47 9.02621C47 10.1799 46.46 11.8555 44 13.4607V42.9771C44 43.5289 43.55 43.9803 43 43.9803H37.9998V36.0342C37.9998 36.2953 38.0994 36.5559 38.2898 36.7464C38.4802 36.9272 38.74 37.0374 38.9998 37.0374C39.2595 37.0374 39.5095 36.9272 39.7097 36.7367C39.8894 36.5461 39.9998 36.2953 39.9998 36.0342C39.9998 35.7633 39.8894 35.5124 39.7 35.3219C39.3298 34.9505 38.6599 34.9505 38.2898 35.3219C38.0994 35.5026 37.9998 35.7633 37.9998 36.0342V30.0145C37.9998 30.2756 38.0994 30.5362 38.2898 30.717C38.4695 30.9076 38.7302 31.0178 38.9998 31.0178C39.2595 31.0178 39.5203 30.9076 39.7 30.717C39.8894 30.5362 39.9998 30.2756 39.9998 30.0145C39.9998 29.7539 39.8894 29.4928 39.7 29.3022C39.3298 28.9309 38.6697 28.9309 38.2898 29.3022C38.0994 29.4928 37.9998 29.7436 37.9998 30.0145V22.9916C37.9998 23.2527 38.0994 23.5133 38.2898 23.7039C38.4802 23.8846 38.74 23.9948 38.9998 23.9948C39.2595 23.9948 39.5203 23.8846 39.7097 23.6941C39.8894 23.5133 39.9998 23.2527 39.9998 22.9916C39.9998 22.7309 39.8894 22.4698 39.7 22.2793C39.3298 21.9079 38.6599 21.9079 38.2898 22.2793C38.0994 22.4698 37.9998 22.7207 37.9998 22.9916V20.5113C40.4529 18.5768 40.9998 16.5065 40.9998 15.0457C40.9998 11.5487 37.9564 8.6852 32.9213 6.92321C32.9336 6.92422 32.9454 6.92764 32.9572 6.93106C32.9711 6.9351 32.985 6.93914 32.9998 6.93914C33.2595 6.93914 33.5203 6.82891 33.7 6.64815C33.8894 6.45758 33.9998 6.19697 33.9998 5.93586C33.9998 5.66496 33.8894 5.40434 33.7097 5.22357C33.3396 4.85224 32.6501 4.85224 32.2898 5.22357C32.0994 5.40434 31.9998 5.66496 31.9998 5.93586C31.9998 6.19697 32.0994 6.45758 32.2898 6.63835C32.3293 6.68029 32.379 6.70949 32.4287 6.73877C32.446 6.74891 32.4632 6.75906 32.4801 6.76976C30.0536 5.97048 27.1945 5.41722 24 5.16594ZM38.9998 8.94569C39.2595 8.94569 39.5203 8.83547 39.7 8.6449C39.8894 8.46414 39.9998 8.20352 39.9998 7.94241C39.9998 7.6818 39.8894 7.42069 39.7 7.23013C39.3298 6.8588 38.6697 6.8588 38.2898 7.23013C38.0994 7.42069 37.9998 7.67151 37.9998 7.94241C37.9998 8.20352 38.0994 8.46414 38.2898 8.6449C38.4802 8.83547 38.7302 8.94569 38.9998 8.94569Z"></path>
                <path d="M24 50V7.18304C32.7799 7.91768 39 11.054 39 15.0459C39 16.1996 38.46 17.8751 36 19.4803V48.9967C36 49.5485 35.55 50 35 50H24ZM25.7898 14.7547C25.5994 14.9453 25.4998 15.2064 25.4998 15.467C25.4998 15.7281 25.5994 15.9887 25.7898 16.1793C25.9802 16.36 26.2302 16.4703 26.4998 16.4703C26.7595 16.4703 27.0203 16.36 27.2 16.1695C27.3894 15.9887 27.4998 15.7281 27.4998 15.467C27.4998 15.2064 27.3894 14.9453 27.2 14.7547C26.8298 14.3834 26.1697 14.3736 25.7898 14.7547ZM26.7898 23.7842C26.5994 23.965 26.4998 24.2256 26.4998 24.4965C26.4998 24.7576 26.5994 25.0182 26.7898 25.2088C26.9802 25.3895 27.2302 25.4998 27.4998 25.4998C27.7595 25.4998 28.0203 25.3895 28.2 25.199C28.3894 25.0182 28.4998 24.7576 28.4998 24.4965C28.4998 24.2256 28.3894 23.965 28.2 23.7842C27.8396 23.4129 27.1501 23.4129 26.7898 23.7842ZM28.4998 44.562C28.7595 44.562 29.0203 44.4518 29.2 44.2612C29.3894 44.0805 29.4998 43.8198 29.4998 43.5587C29.4998 43.2878 29.3894 43.0272 29.2 42.8464C28.8298 42.4751 28.1599 42.4751 27.7898 42.8464C27.5994 43.0272 27.4998 43.2878 27.4998 43.5587C27.4998 43.8198 27.5994 44.0805 27.7898 44.2612C27.9695 44.4518 28.2302 44.562 28.4998 44.562ZM28.4998 31.5194C28.7595 31.5194 29.0203 31.4092 29.2 31.2186C29.3894 31.0379 29.4998 30.7772 29.4998 30.5161C29.4998 30.2452 29.3894 29.9846 29.2097 29.8039C28.8396 29.4325 28.1501 29.4325 27.7898 29.8039C27.5994 29.9846 27.4998 30.2452 27.4998 30.5161C27.4998 30.7772 27.5994 31.0379 27.7898 31.2186C27.9802 31.4092 28.2302 31.5194 28.4998 31.5194ZM30.4998 19.4801C30.7595 19.4801 31.0203 19.3699 31.2 19.1891C31.3894 18.9985 31.4998 18.7379 31.4998 18.4768C31.4998 18.2059 31.3894 17.9453 31.2 17.7645C30.8298 17.3932 30.1599 17.3932 29.7898 17.7645C29.5994 17.9453 29.4998 18.2059 29.4998 18.4768C29.4998 18.7379 29.5994 18.9985 29.7898 19.1793C29.9695 19.3699 30.2302 19.4801 30.4998 19.4801Z"></path>
            </g>
        </g>
    </Portion>
};