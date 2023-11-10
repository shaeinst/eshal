import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const SVGComponent = (props: SvgProps) => (
    <Svg
        width={props.width ? props.width : 20}
        height={props.height ? props.height : 17}
        viewBox="0 0 20 17"
        fill="none"
        {...props}>
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.75 5.591h5.473C16.933 5.591 20 8.781 20 16.368h-1.96c0-6.521-2.207-8.817-8.817-8.817H3.751l4.206 4.206-1.386 1.385L0 6.571 6.571 0l1.386 1.386L3.75 5.59z"
            fill={props.fill ? props.fill : '#657786'}
        />
    </Svg>
)

export default SVGComponent
