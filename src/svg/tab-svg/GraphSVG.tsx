import React from 'react';
import Svg, {Path} from "react-native-svg";

export const GraphSvg = ({color, size}: any) => {
    return (
        <Svg
            width={size}
            height={size}
            fill='none'>
            <Path d="M23 6L13.5 15.5L8.5 10.5L1 18" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M17 6H23V12" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
    );
};