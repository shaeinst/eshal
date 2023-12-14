import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

function SvgComponent(props: SvgProps) {
    return (
        <Svg width={30} height={30} viewBox="0 0 512 512" {...props}>
            <Path
                fill="none"
                stroke={props.stroke ? props.stroke : '#292D32'}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={48}
                d="M244 400L100 256l144-144M120 256h292"
            />
        </Svg>
    )
}

export default SvgComponent
