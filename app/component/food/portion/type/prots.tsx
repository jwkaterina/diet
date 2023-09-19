'use client'

import { useContext } from 'react';
import PortionTypeProps from './portion-type-props';
import Portion from '../portion';
import { usePortions } from '../../../../context/portions-context';
import { Group } from '../../../../context/portions-reducer';


export default function Prots({ index }: PortionTypeProps): JSX.Element {
    const checked = usePortions().prots.checked;

    const width = 50;
    const height = 36;

    return <Portion width={width} height={height} group={Group.PROTS} index={index} checked={checked}>
        <g className="portion">
            <g className="portion-left">
                <path d="M24.9966 1.01647C16.8601 0.815089 9.14424 2.51193 6.02579 3.30304C2.81129 4.11844 0.954785 6.87384 1.13419 10.0716C1.24259 12.0035 1.32799 14.9764 1.02399 17.2178C0.715385 19.4933 3.41229 22.6505 7.51919 22.6872C10.3472 22.7124 15.2118 24.0508 17.0193 26.9593C18.7747 29.784 21.6576 31.7497 24.9966 32.9178V21.6274C24.181 21.2632 23.3683 20.821 22.5649 20.2901C21.7985 19.7836 21.1285 19.1446 20.5529 18.4287C19.0929 16.6129 15.242 12.558 9.98948 12.5912C3.49578 12.6321 1.74589 7.42444 5.22879 5.21254C7.78416 3.58967 13.2752 1.83829 24.9966 2.46133V1.01647ZM24.9966 3.80368C20.4165 4.1852 21.5496 8.00793 24.8328 9.01904C24.8881 9.03606 24.9426 9.05368 24.9966 9.0719V3.80368ZM24.9966 11.0883C23.1898 10.4966 21.443 10.8361 21.443 10.8361C18.432 11.6299 20.3052 16.7851 23.2604 18.5179C23.8805 18.8815 24.4583 19.1967 24.9966 19.4693V11.0883ZM7.85268 5.97464C11.1425 4.00944 15.2925 3.13304 18.642 4.90774C23.4199 7.43894 19.5508 14.1746 14.4158 11.5055C13.5202 11.0397 12.2514 10.8421 10.9938 10.6461C8.59848 10.2729 6.24373 9.906 6.58608 7.70484C6.69218 7.02284 7.15378 6.39224 7.85268 5.97464Z"/>
            </g>
            <g className="portion-right">
                <path d="M25 32.9014C33.1046 35.7368 43.8959 33.8732 47.7718 28.1892C49.0775 26.2742 48.9453 24.7682 48.8027 23.1447C48.721 22.2134 48.6358 21.2435 48.8167 20.1356C50.0292 12.7073 44.7187 7.96177 44.7187 7.96177C39.7541 2.84826 32.2118 1.17849 25 1V2.44486C26.4101 2.51981 27.9104 2.62913 29.5066 2.77717C35.0007 3.28677 40.1837 5.79887 43.7907 9.97447C46.5144 13.1276 48.0541 16.8372 44.1996 19.6303C44.1996 19.6303 34.4145 25.8152 25 21.6109V32.9014ZM25 19.4528C28.1437 21.0444 29.9367 21.1794 30.9071 20.9885C31.8222 20.8085 32.3357 19.6711 31.8404 18.8859C31.4918 18.333 31.0397 18.0779 30.5693 17.8126C29.7184 17.3327 28.8078 16.8191 28.3429 14.4472C28.2802 14.1274 28.1776 13.8208 28.0256 13.5458C27.2614 12.1624 26.1192 11.4384 25 11.0719V19.4528ZM25 9.05543C27.6292 9.94349 28.6859 12.2352 29.4698 13.9355L29.4698 13.9355L29.4699 13.9355C29.7648 14.5752 30.0212 15.1311 30.3081 15.4971C34.606 20.9776 42.1892 18.8422 42.1892 18.8422C44.7825 17.9287 44.6045 15.5741 43.6834 13.3301C42.4637 10.3586 40.091 8.05437 37.1929 6.82547C31.2697 4.31377 27.37 3.58979 25 3.78721V9.05543Z"/>
            </g>
        </g>
    </Portion>
};