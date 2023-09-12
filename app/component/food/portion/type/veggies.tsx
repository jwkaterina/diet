import React, { FunctionComponent } from 'react';
import { PortionTypeProps } from './portion-type-props';
import { Portion } from '../portion';
import { PortionsContext, Group } from '../../../../context/food-context';

export const Veggies: FunctionComponent<PortionTypeProps> = (props) => {
    const checked = React.useContext(PortionsContext).portions.veggies.checked;

    const width = 50;
    const height = 44;

    return<Portion width={width} height={height} group={Group.VEGGIES} index={props.index} checked={checked}>
      <g className="portion">
        <g className="portion-left">
            <path d="M25 34.371V43.0779C21.7409 42.9119 18.4567 42.3601 15.4842 41.5475C15.5663 41.4182 15.6145 41.2703 15.6242 41.1175C15.6742 40.4375 15.7242 39.7675 15.7842 39.1175C16.9027 37.3816 19.4063 35.2454 25 34.371Z"/>
            <path d="M25 26.8379V33.5519C24.6638 33.6047 24.3285 33.6632 23.9942 33.7275C24.0093 33.6363 23.9878 33.5429 23.9342 33.4675L23.8742 33.3775C23.1242 32.1975 23.2242 29.9475 24.1142 28.1375C24.3027 27.6398 24.6065 27.1945 25 26.8379Z"/>
            <path d="M25 5.35977C24.9448 5.35878 24.8895 5.35803 24.8342 5.35751H24.2242C20.9843 5.47197 17.8264 6.4062 15.0457 8.07286C12.265 9.73952 9.95244 12.0842 8.32421 14.8875C9.71421 14.2375 11.5242 13.6775 12.8342 14.4275C13.8442 15.0075 14.3642 16.2475 14.3642 18.1075C14.3642 24.5275 13.2342 27.7775 13.0442 28.2675C13.1002 29.7768 13.0031 31.2878 12.7542 32.7775C12.4242 34.7775 12.2042 37.9575 13.8042 39.7775C14.1271 37.0487 14.591 34.3384 15.1942 31.6575C15.7331 29.2788 16.4347 26.94 17.2942 24.6575V24.1475C17.2984 22.4863 16.9077 20.848 16.1542 19.3675C16.1439 19.3536 16.1367 19.3376 16.1331 19.3206C16.1295 19.3037 16.1297 19.2861 16.1335 19.2692C16.1374 19.2523 16.1449 19.2364 16.1555 19.2227C16.1661 19.209 16.1795 19.1977 16.1949 19.1896C16.2102 19.1816 16.2271 19.177 16.2445 19.1761C16.2618 19.1752 16.2791 19.1781 16.2952 19.1846C16.3113 19.191 16.3258 19.2009 16.3377 19.2135C16.3496 19.2261 16.3587 19.2411 16.3642 19.2575C17.1166 20.5073 17.6129 21.8942 17.8242 23.3375L18.0042 22.9075C18.0842 22.7176 18.1742 22.5274 18.2642 22.3375C18.5642 21.6275 18.8942 20.9775 19.2642 20.3375C19.539 19.512 19.7627 18.6705 19.9342 17.8175C20.2731 16.0765 20.5069 14.3166 20.6342 12.5475C20.639 12.5166 20.6548 12.4885 20.6787 12.4683C20.7026 12.4481 20.7329 12.4371 20.7642 12.4375C20.796 12.4375 20.8266 12.4502 20.8491 12.4727C20.8716 12.4952 20.8842 12.5257 20.8842 12.5575C20.8806 14.3495 20.767 16.1395 20.5442 17.9175C20.5368 17.9765 20.5254 18.0369 20.5139 18.0976C20.4941 18.2015 20.4742 18.3065 20.4742 18.4075C21.2485 17.2799 22.1439 16.2404 23.1442 15.3075C23.7205 14.7594 24.3421 14.2689 25 13.8397V5.35977Z"/>
            <path d="M25 14.8405C24.5693 15.1801 24.1596 15.5496 23.7742 15.9475C22.7944 16.9396 21.9351 18.0439 21.2142 19.2375C21.5343 18.9672 21.868 18.7135 22.2142 18.4775C22.9952 17.8929 23.8668 17.4403 24.7942 17.1375C24.8625 17.1153 24.9311 17.0944 25 17.075V14.8405Z"/>
            <path d="M25 17.5222V25.861C24.879 25.9423 24.7621 26.0302 24.6499 26.1245C24.1143 26.5743 23.7027 27.1537 23.4542 27.8075C22.5942 29.5775 22.2442 32.1975 23.2642 33.8075L23.3242 33.8975C19.4642 34.7475 17.2242 36.2475 15.9342 37.6975C16.1342 35.8475 16.3942 33.9975 16.7342 32.1675C17.2545 29.2094 18.0514 26.3067 19.1142 23.4975C19.3342 22.9375 19.5642 22.3875 19.8242 21.8475C20.0742 21.5275 20.3242 21.2175 20.5842 20.9175C21.1949 20.2155 21.864 19.5666 22.5842 18.9775C23.2833 18.3745 24.0774 17.8913 24.9342 17.5475C24.9561 17.5389 24.978 17.5305 25 17.5222Z"/>
            <path d="M13.9223 8.02059C16.842 6.10163 20.216 4.98646 23.7042 4.78751C23.4579 3.90854 22.8761 3.16154 22.0842 2.70751C19.8442 1.45751 16.3342 2.59751 16.3342 2.59751C16.2657 2.61779 16.1927 2.61779 16.1242 2.59751C15.3886 2.35426 14.5972 2.33564 13.8509 2.54403C13.1047 2.75241 12.4374 3.17834 11.9342 3.76751C11.4436 4.3518 11.0823 5.03344 10.8742 5.76751C10.8591 5.82901 10.828 5.88543 10.7841 5.93108C10.7402 5.97673 10.6851 6.00999 10.6242 6.02751C9.82066 6.26093 9.07341 6.65639 8.42848 7.18953C7.78355 7.72267 7.2546 8.38221 6.87421 9.12751C5.60421 11.7275 6.53421 14.9075 6.70421 15.4275L7.07421 15.7175C8.64051 12.5944 11.0026 9.93954 13.9223 8.02059Z"/>
            <path d="M13.1842 41.3575C13.3474 41.3674 13.511 41.3674 13.6742 41.3575C13.6268 41.2536 13.5997 41.1416 13.5942 41.0275V40.8775C13.5138 40.8153 13.4401 40.7449 13.3742 40.6675C13.2648 40.5769 13.1673 40.4728 13.0842 40.3575C13.0024 40.2712 12.9288 40.1774 12.8642 40.0775L12.7242 39.8675C12.5373 39.5788 12.383 39.2702 12.2642 38.9475C12.1972 38.7982 12.1404 38.6445 12.0942 38.4875C12.055 38.3836 12.0249 38.2766 12.0042 38.1675C11.9199 37.8622 11.8564 37.5515 11.8142 37.2375C11.7642 37.1075 11.7642 36.9975 11.7642 36.8475V35.5875C11.7723 34.6622 11.8559 33.7392 12.0142 32.8275C12.2698 31.3521 12.3637 29.8533 12.2942 28.3575C12.2435 27.0567 12.049 25.7655 11.7142 24.5075C9.64421 16.7275 4.02421 14.5575 2.71421 14.1475C2.12421 15.3675 -0.135789 20.5475 1.71421 24.9875C1.79009 25.1667 1.86998 25.3565 1.95395 25.5561C2.26829 26.3031 2.6403 27.1871 3.07421 28.1575C3.09541 28.2052 3.11591 28.2522 3.13626 28.2989C3.19271 28.4283 3.24806 28.5552 3.31421 28.6875L3.37421 28.8275C3.51207 29.1415 3.66166 29.4614 3.814 29.7872L3.81725 29.7941C3.86272 29.8913 3.90851 29.9893 3.95421 30.0875C4.35421 30.9175 4.78421 31.7875 5.24421 32.6475C5.4442 33.0375 5.66419 33.4275 5.88418 33.8175C5.93534 33.9198 5.99187 34.0168 6.04981 34.1163L6.07979 34.1678L6.11421 34.2275C6.30421 34.5875 6.50421 34.9375 6.68421 35.2275C6.80336 35.4195 6.89621 35.5632 7.01788 35.7516L7.01844 35.7525L7.02109 35.7566C7.08243 35.8515 7.15114 35.9579 7.23421 36.0875C7.48421 36.4775 7.75421 36.8575 8.02421 37.2275L8.53421 37.8975L8.75421 38.1675L9.14421 38.6275C9.40421 38.9275 9.66421 39.2075 9.93421 39.4675L10.3342 39.8275L10.5542 40.0175C10.7805 40.2077 11.0175 40.3847 11.2642 40.5475L11.4842 40.6875C11.5531 40.7351 11.6269 40.7754 11.7042 40.8075L11.9542 40.9375C12.1944 41.0705 12.4495 41.1746 12.7142 41.2475C12.7877 41.2781 12.8651 41.2983 12.9442 41.3075L13.1842 41.3575Z"/>
            <path d="M23.9942 33.6975L23.9921 33.711L23.99 33.7215L23.9878 33.7319L24.0142 33.7275C24.0066 33.7808 23.9885 33.8321 23.9611 33.8784C23.9336 33.9248 23.8973 33.9652 23.8542 33.9975C23.7824 34.0306 23.7022 34.0411 23.6242 34.0275C23.5635 34.0275 23.5037 34.013 23.4498 33.9852C23.3958 33.9574 23.3494 33.917 23.3142 33.8675L23.3242 33.8775C23.5444 33.8065 23.768 33.7464 23.9942 33.6975Z"/>
            <path d="M12.8042 26.2675C13.3435 23.6358 13.5983 20.9537 13.5642 18.2675C13.5642 16.6975 13.1742 15.6775 12.3842 15.2175C11.0142 14.4475 8.62421 15.6275 7.62421 16.2175C9.98085 18.3656 11.6419 21.1688 12.3942 24.2675C12.5663 24.9264 12.7032 25.594 12.8042 26.2675Z"/>
        </g>
        <g className="portion-right">
            <path d="M25 13.8397V5.35977C28.4688 5.42199 31.8564 6.42694 34.7992 8.26834C37.7888 10.1391 40.2028 12.8002 41.7742 15.9575C40.0347 16.592 38.3739 17.4241 36.8242 18.4375C35.2691 19.4914 33.9872 20.9002 33.0842 22.5475C32.4442 23.6475 29.9842 24.9175 26.5142 25.2375C25.9712 25.3417 25.4564 25.5543 25 25.861V17.5222C25.5735 17.306 26.1809 17.1926 26.7942 17.1875C27.0762 17.1845 27.3578 17.2113 27.6342 17.2675C27.6647 17.2735 27.6962 17.2675 27.7223 17.2507C27.7485 17.2339 27.767 17.2077 27.7742 17.1775C27.7788 17.1624 27.7804 17.1465 27.7789 17.1308C27.7774 17.1151 27.7728 17.0998 27.7654 17.0859C27.7579 17.072 27.7478 17.0596 27.7356 17.0496C27.7234 17.0396 27.7093 17.0321 27.6942 17.0275C26.8059 16.8107 25.8778 16.8276 25 17.075V14.8405C26.8947 13.3465 29.1959 12.4314 31.6242 12.2275C31.6861 12.2224 31.7436 12.1935 31.7846 12.1469C31.8257 12.1003 31.847 12.0396 31.8442 11.9775C31.8442 11.9451 31.8377 11.9131 31.825 11.8833C31.8124 11.8535 31.7938 11.8266 31.7704 11.8042C31.7471 11.7817 31.7194 11.7643 31.6891 11.7528C31.6588 11.7414 31.6266 11.7362 31.5942 11.7375C29.232 11.8301 26.9556 12.5639 25 13.8397Z"/>
            <path d="M25 33.5519V26.8379C25.0309 26.8099 25.0624 26.7824 25.0943 26.7555C25.5337 26.3862 26.0604 26.1355 26.6242 26.0275C30.5442 25.6675 33.0442 24.2275 33.7842 22.9575C34.6045 21.3912 35.7874 20.0438 37.2342 19.0275C38.82 17.995 40.5217 17.1526 42.3042 16.5175H42.4242C43.467 16.1769 44.5378 15.9293 45.6242 15.7775C46.2519 15.6901 46.8885 15.8556 47.3942 16.2375C47.6333 16.4156 47.8337 16.6403 47.9832 16.8982C48.1328 17.156 48.2284 17.4416 48.2642 17.7375C48.4042 19.0275 46.9642 23.3575 44.2142 26.2775C42.8842 25.5575 40.6442 25.6175 37.2142 26.4675C36.5765 26.5566 35.9951 26.881 35.5843 27.3769C35.1735 27.8728 34.9631 28.5043 34.9942 29.1475L34.9927 29.1594C34.7831 30.7865 34.5457 32.6292 26.9942 33.3075C26.3268 33.3665 25.6617 33.448 25 33.5519Z"/>
            <path d="M25 43.0779V34.371C25.6578 34.2681 26.3582 34.1827 27.1042 34.1175C35.2742 33.3775 35.5542 31.1175 35.7742 29.2975C35.8942 28.2975 35.9842 27.6175 37.4342 27.2975C40.7542 26.4675 42.9042 26.4075 44.0142 27.1175L44.1342 27.1975C44.4102 27.4327 44.6286 27.7281 44.7725 28.061C44.9164 28.3939 44.982 28.7553 44.9642 29.1175C44.9642 33.7375 43.3642 37.2775 40.1942 39.6475C36.4507 42.4584 30.7646 43.3715 25 43.0779Z"/>
            <path d="M47.3942 14.1575C47.4003 14.3446 47.366 14.5308 47.2935 14.7034C47.221 14.876 47.1121 15.0309 46.9742 15.1575C46.4953 14.9948 45.9841 14.9502 45.4842 15.0275C44.467 15.17 43.4635 15.3975 42.4842 15.7075C41.0739 12.9034 39.0191 10.4735 36.4882 8.61707C33.9573 6.76062 31.0224 5.53047 27.9242 5.02751C27.925 4.66392 27.9963 4.30393 28.1342 3.96751C28.4185 3.28868 28.9035 2.71296 29.5242 2.31751C29.6487 2.2445 29.7689 2.16437 29.8842 2.07751C30.3387 1.67882 30.8714 1.37947 31.4483 1.19866C32.0252 1.01784 32.6335 0.959549 33.2342 1.02751C34.5642 1.31751 35.9142 2.59751 37.2342 4.82751C37.8476 5.81581 38.6619 6.66415 39.6242 7.31751C39.9745 7.56274 40.3494 7.81288 40.742 8.07481C40.9097 8.18671 41.0806 8.30077 41.2542 8.41751C43.9442 10.2075 47.2742 12.4275 47.3942 14.1575Z"/>
        </g>
    </g>
    </Portion>
};