import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

function SvgComponent(props: SvgProps) {
    return (
        <Svg width={14} height={14} viewBox="0 0 256 256" {...props}>
            <Path
                fill={props.fill ? props.fill : '#000000'}
                d="M208.49 120.49a12 12 0 01-17 0L140 69v147a12 12 0 01-24 0V69l-51.51 51.49a12 12 0 01-17-17l72-72a12 12 0 0117 0l72 72a12 12 0 010 17"
            />
        </Svg>
    )
}

export default SvgComponent
