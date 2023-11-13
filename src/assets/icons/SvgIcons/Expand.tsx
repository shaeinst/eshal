import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
const SvgComponent = (props: SvgProps) => (
    <Svg width={12} height={12} viewBox="0 0 16 16" fill="none" {...props}>
        <Path
            fill={props.fill ? props.fill : '#657786'}
            d="M16 1a1 1 0 0 0-1-1h-5a1 1 0 0 0 0 2h2.57L9.29 5.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L14 3.42V6a1 1 0 0 0 2 0V1ZM6.71 9.29a1 1 0 0 0-1.42 0L2 12.57V10a1 1 0 1 0-2 0v5a1 1 0 0 0 1 1h5a1 1 0 1 0 0-2H3.42l3.29-3.29a.999.999 0 0 0 0-1.42Z"
        />
    </Svg>
)
export default SvgComponent
