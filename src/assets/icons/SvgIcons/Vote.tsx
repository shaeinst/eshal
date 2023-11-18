import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

function SvgComponent(props: SvgProps) {
    //
    return (
        <Svg width={13} height={17} viewBox="0 0 10 13" fill="none" {...props}>
            <Path
                d="M5.568 1.189a1 1 0 00-1.413 0L.382 4.959a1 1 0 001.415 1.415L3.862 4.31V12a1 1 0 102 0V4.31l2.064 2.064A1 1 0 109.34 4.959L5.568 1.19z"
                fill={props.fill ? props.fill : '#292D32'}
            />
        </Svg>
    )
}
export default SvgComponent
