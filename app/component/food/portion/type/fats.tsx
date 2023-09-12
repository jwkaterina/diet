import React, { FunctionComponent } from 'react';
import { PortionTypeProps } from './portion-type-props';
import { Portion } from '../portion';
import { PortionsContext, Group } from '../../../../context/food-context';

export const Fats: FunctionComponent<PortionTypeProps> = (props) => {
    const checked = React.useContext(PortionsContext).portions.fats.checked;

    const width = 98;
    const height = 86;

    return <Portion width={width} height={height} group={Group.FATS} index={props.index} checked={checked}>
        <g className="portion">
            <g className="portion-left">
                <path d="M48.492 4.84932C46.9954 4.69097 45.49 4.40854 43.992 4L42.792 3.70002L42.4087 3.59532C39.1698 2.70996 35.1234 1.60385 30.892 1.70002C19.792 1.90002 11.892 4.60001 7.39201 9.60001C3.99201 13.4 2.49201 18.5 2.99201 24.8C3.69201 33.4 7.79201 39.2 14.892 41.9C2.89201 47.6 -1.30799 55.7 2.19201 66.1C2.29201 66.4 2.41701 66.725 2.54201 67.05C2.66698 67.3749 2.79203 67.7001 2.89201 68H2.79202C5.09202 74.6 9.79202 79.8 16.092 82.6C19.392 84.1 22.992 84.8 26.592 84.8C29.692 84.8 32.892 84.3 35.992 83.2C40.692 81.6 44.392 79.8 47.392 77.8C47.7545 77.5538 48.1213 77.3141 48.492 77.0811V72.1539C47.36 72.7772 46.2581 73.4592 45.192 74.2C42.492 76 38.992 77.7 34.692 79.1C28.892 81.1 22.892 80.9 17.692 78.6C17.442 78.5 17.192 78.375 16.942 78.25C16.692 78.125 16.442 78 16.192 77.9C17.1919 78 18.1922 78.1 19.292 78.1C23.292 78.1 27.992 77.2 33.392 75.3C38.092 73.7 41.792 71.9 44.792 69.9C45.9822 69.0916 47.2178 68.3537 48.492 67.691V63.1942C46.4722 64.1217 44.5288 65.2236 42.692 66.5C39.992 68.3 36.492 70 32.192 71.4C25.292 73.8 19.992 74.5 15.692 73.6C10.992 72.6 7.79201 69.6 5.99201 64.4C2.69201 54.8 7.89201 47.9 22.392 42.9C26.692 41.4 30.492 40.6 33.692 40.4C38.8013 40.0402 43.8589 38.7482 48.492 36.5241V31.9803C43.8845 34.5234 38.7398 36.0709 33.392 36.4C29.792 36.6 25.792 37.5 21.192 39.1C16.692 38.5 13.192 36.9 10.892 34.3C11.692 34.1 12.492 33.9 13.192 33.4C15.492 32 16.592 29.3 15.992 26.6L12.092 27.5C12.292 28.5 11.892 29.5 11.092 30.1C10.292 30.6 9.29201 30.6 8.39201 30.3C7.69201 28.6 7.29202 26.6 7.09202 24.3C6.69202 19.1 7.79201 15.1 10.392 12.1C14.092 8.00001 21.092 5.7 30.992 5.5C34.618 5.40458 38.1529 6.40176 41.2492 7.27522L41.692 7.4L42.892 7.70002C44.7645 8.22666 46.637 8.5821 48.492 8.76633V4.84932Z"/>
                <path d="M48.492 15.9364L48.192 16.4C48.2906 16.4633 48.3906 16.5247 48.492 16.5841V15.9364Z"/>
                <path d="M48.492 25.0105C45.3802 23.7387 41.7455 24.4662 39.492 26.9C37.392 29.2 36.892 32.6 38.192 35.5L41.892 33.9C41.192 32.4 41.492 30.7 42.492 29.6C43.692 28.3 45.792 28 47.492 29L48.492 27.25V25.0105Z"/>
                <path d="M48.492 49.3688C47.7414 46.8082 47.8338 44.5682 48.492 42.6018V49.3688Z"/>
                <path d="M47.592 50.2C44.192 40.2 34.092 41.3 26.792 43C17.792 45.1 11.992 48.5 9.49202 53.1C7.79202 56.2 7.59201 59.7 8.89201 63.5C10.192 67.3 12.492 70 15.692 71.4C17.392 72.1 19.292 72.5 21.392 72.5C25.392 72.5 30.092 71.2 35.592 68.7C42.392 65.6 51.092 60.3 47.592 50.2ZM24.892 53.7L23.592 49.9C24.692 49.5 25.992 49.2 27.292 48.9L28.192 52.8C26.992 53.1 25.892 53.4 24.892 53.7ZM39.192 54.5C38.392 53.3 36.892 51.7 32.192 52.1L31.792 48.1C36.892 47.6 40.492 49.1 42.592 52.3L39.192 54.5Z"/>
                <path d="M21.392 16.1C23.992 14.4 25.392 11.3 24.992 8.1L20.992 8.70001C21.192 10.3 20.492 11.9 19.292 12.7C17.792 13.7 15.692 13.4 14.292 12L11.492 14.8C13.092 16.4 15.192 17.3 17.392 17.3C18.692 17.2 20.092 16.9 21.392 16.1Z"/>
                <path d="M18.792 27.7L22.792 27.6C22.692 24.5 20.892 21.8 18.192 20.5C15.392 19.2 11.992 19.5 9.59203 21.5L12.092 24.6C13.392 23.6 15.092 23.4 16.492 24.1C17.892 24.8 18.792 26.2 18.792 27.7Z"/>
                <path d="M30.592 35.9C29.392 34.1 27.292 33.2 25.192 33.4C22.992 33.7 21.092 35.2 20.392 37.1L16.592 35.8C17.792 32.3 20.992 29.8 24.692 29.4C28.392 29.1 31.892 30.7 33.892 33.7L30.592 35.9Z"/>
                <path d="M37.792 15.4C39.192 16.3 40.792 16.8 42.392 16.8C43.792 16.8 45.192 16.4 46.392 15.7L44.392 12.2C42.992 13 41.292 12.9 39.992 12C38.692 11.1 37.992 9.6 38.192 8.1L34.192 7.6C33.992 10.8 35.292 13.7 37.792 15.4Z"/>
                <path d="M37.792 25.5H37.092C34.592 25.5 32.092 24.2 30.392 21.9L33.592 19.5C34.592 20.8 35.992 21.5 37.392 21.4C38.692 21.3 39.692 20.4 39.992 19.1L43.892 20.1C43.192 23.1 40.792 25.2 37.792 25.5Z"/>
                <path d="M24.992 25.8L28.292 23.5C27.192 21.9 27.092 19.8 28.092 18.1C28.992 16.5 30.792 15.5 32.692 15.5L32.792 11.5C29.392 11.4 26.192 13.1 24.592 16.1C22.892 19.1 23.092 22.9 24.992 25.8Z"/>
            </g>
            <g className="portion-right">
                <path d="M48.492 77.3854C53.5416 74.2118 59.3366 72.277 65.392 71.9044C68.992 71.7044 73.092 70.8044 77.692 69.2044C92.092 63.9044 99.392 50.0044 94.692 36.5044C94.492 35.9044 94.292 35.3044 94.092 34.6044C92.992 31.5044 91.492 29.0044 89.592 27.1044C90.692 24.4044 90.992 21.3044 90.692 17.6044C89.392 2.40438 78.492 0.904371 70.492 1.00437C66.992 1.10437 63.792 2.30436 60.992 3.40437L59.992 3.80436C56.4266 5.11412 52.4905 5.57673 48.492 5.15368V9.07068C52.9771 9.51613 57.3597 8.96069 61.392 7.40437L62.392 7.00437C64.992 6.00437 67.692 5.00436 70.492 4.90437C81.192 4.70437 85.892 8.40436 86.692 17.8044C86.892 20.4044 86.792 22.6044 86.192 24.5044C80.692 21.5044 72.892 21.6044 62.792 25.1044C58.092 26.7044 54.392 28.5044 51.392 30.5044C50.4525 31.1425 49.4847 31.7367 48.492 32.2846V36.8285C50.2971 35.9619 52.0378 34.9539 53.692 33.8044C56.392 32.0044 59.892 30.3044 64.192 28.9044C78.692 23.9044 86.992 26.1044 90.392 35.9044C92.192 41.2044 91.592 45.5044 88.392 49.1044C85.592 52.4044 80.892 55.1044 73.992 57.4044C69.692 58.9044 65.892 59.7044 62.692 59.9044C57.8024 60.2487 52.9602 61.4468 48.492 63.4985V67.9954C52.8918 65.707 57.7517 64.3145 62.792 64.0044C66.392 63.8044 70.492 62.9044 75.092 61.3044C81.992 58.9044 86.992 56.1044 90.292 52.7044C87.992 58.2044 83.192 62.8044 76.492 65.1044C72.192 66.6044 68.392 67.4044 65.192 67.6044C59.3749 68.014 53.6249 69.632 48.492 72.4582V77.3854Z"/>
                <path d="M48.492 49.6732C48.5531 49.8814 48.6197 50.0918 48.692 50.3043C50.892 56.6043 55.992 58.3043 61.192 58.3043C63.692 58.3043 66.092 57.9044 68.392 57.5043C77.892 55.6044 84.092 52.3044 86.792 47.5044C88.592 44.5044 88.792 40.9044 87.492 37.0044C86.192 33.1044 83.792 30.4044 80.492 29.1044C75.392 27.0044 68.492 28.2044 59.792 32.5044C55.3858 34.7424 50.1481 37.9588 48.492 42.9061V49.6732ZM65.092 41.3043L63.292 37.7043C64.892 36.9043 66.392 36.3043 67.792 35.8043L69.092 39.6044C67.792 40.0044 66.492 40.6043 65.092 41.3043ZM78.492 41.5044C77.792 40.2044 76.492 38.5044 72.592 39.0044L72.092 35.0044C77.892 34.3044 80.692 37.2043 81.992 39.7043L78.492 41.5044Z"/>
                <path d="M48.492 27.5544L49.492 25.8044C49.1666 25.617 48.8324 25.4539 48.492 25.3148V27.5544Z"/>
                <path d="M48.492 16.8884C49.8309 17.6723 51.4047 18.1044 52.892 18.1044C54.292 18.1044 55.392 17.8044 56.492 17.3044C59.192 16.0044 60.592 13.1044 60.192 10.1044L56.192 10.6044C56.392 11.9044 55.792 13.1043 54.592 13.7043C53.392 14.3043 51.692 14.2044 50.392 13.3044L48.492 16.2407V16.8884Z"/>
                <path d="M50.192 26.2044C50.292 23.2044 52.092 20.6044 54.892 19.6044C57.492 18.6044 60.592 19.3044 62.892 21.1044L60.292 24.2044C59.092 23.2044 57.492 22.9044 56.192 23.3044C54.992 23.7044 54.192 24.8044 54.192 26.2044H50.192Z"/>
                <path d="M77.692 14.7043C76.792 14.7043 75.992 14.6044 75.192 14.3044C71.692 13.1044 69.492 9.50435 69.992 5.80435L73.992 6.20435C73.792 8.10435 74.892 9.90436 76.592 10.5044C77.992 11.0044 79.692 10.5044 80.792 9.30435L83.692 12.0044C82.092 13.8044 79.892 14.7043 77.692 14.7043Z"/>
                <path d="M65.292 14.1044C65.492 15.6044 64.792 17.0044 63.592 17.9044L65.892 21.2043C68.392 19.5043 69.692 16.6043 69.292 13.7043C68.892 10.7043 66.892 8.10437 63.992 7.10437L62.692 10.9044C64.092 11.3044 65.092 12.6044 65.292 14.1044Z"/>
                <path d="M78.592 21.3044C78.092 20.4044 76.992 19.8044 75.992 19.9044C74.892 20.0044 73.992 20.7044 73.492 21.7044L69.792 20.1044C70.892 17.7044 73.192 16.0044 75.792 15.9044C78.292 15.8044 80.692 17.1044 81.992 19.3044L78.592 21.3044Z"/>
            </g>
        </g>
    </Portion>
};