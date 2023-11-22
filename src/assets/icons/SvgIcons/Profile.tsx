import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
const SVGComponent = (props: SvgProps) => (
    <Svg width={18} height={26} viewBox="0 0 20 29" fill="none" {...props}>
        <Path
            d="M16 6.176c0 2.745-2.565 5.177-6 5.177S4 8.92 4 6.176C4 3.432 6.565 1 10 1s6 2.432 6 5.176zM19 20.177C19 24.383 15.092 28 10 28c-5.092 0-9-3.617-9-7.823 0-4.207 3.908-7.824 9-7.824 5.092 0 9 3.617 9 7.824z"
            fill={props.fill ? props.fill : undefined}
            stroke={props.stroke ?  props.stroke: '#657786'}
            strokeWidth={2}
        />
    </Svg>
)
export default SVGComponent
