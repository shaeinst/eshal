import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
const SvgComponent = (props: SvgProps) => (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
        <Path
            d="M26.667 18.667h-8v8h-5.334v-8h-8v-5.334h8v-8h5.334v8h8v5.334z"
            fill={props.fill ? props.fill : '#657786'}
        />
    </Svg>
)
export default SvgComponent
