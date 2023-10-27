import * as React from 'react'
import Svg, { SvgProps, Circle } from 'react-native-svg'
const SvgComponent = (props: SvgProps) => (
    <Svg width={6} height={6} fill="none" {...props}>
        <Circle cx={3} cy={3} r={3} fill={props.fill ? props.fill : '#D9D9D9'} />
    </Svg>
)
export default SvgComponent
