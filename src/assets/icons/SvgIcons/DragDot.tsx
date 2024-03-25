import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
const SvgComponent = (props: SvgProps) => (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
        <Path
            d="M9.333 25.333v-2.666H12v2.666H9.333zm5.334 0v-2.666h2.666v2.666h-2.666zm5.333 0v-2.666h2.667v2.666H20zM9.333 20v-2.667H12V20H9.333zm5.334 0v-2.667h2.666V20h-2.666zM20 20v-2.667h2.667V20H20zM9.333 14.667V12H12v2.667H9.333zm5.334 0V12h2.666v2.667h-2.666zm5.333 0V12h2.667v2.667H20zM9.333 9.333V6.667H12v2.666H9.333zm5.334 0V6.667h2.666v2.666h-2.666zm5.333 0V6.667h2.667v2.666H20z"
            fill={props.fill ? props.fill : '#292D32'}
        />
    </Svg>
)
export default SvgComponent
