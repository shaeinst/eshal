import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
const SvgComponent = (props: SvgProps) => (
    <Svg width={18} height={11} fill="none" {...props}>
        <Path
            stroke={props.stroke ? props.stroke : '#657786'}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.657}
            d="m2 2 7 7 7-7"
        />
    </Svg>
)
export default SvgComponent
