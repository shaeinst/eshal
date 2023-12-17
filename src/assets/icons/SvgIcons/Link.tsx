import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

function SvgComponent(props: SvgProps) {
    return (
        <Svg width={24} height={24} viewBox="0 0 256 256" {...props}>
            <Path
                fill={props.fill ? props.fill : '#657786'}
                d="M137.54 186.36a8 8 0 010 11.31l-9.94 10a56 56 0 01-79.22-79.27l24.12-24.12a56 56 0 0176.81-2.28 8 8 0 11-10.64 12 40 40 0 00-54.85 1.63L59.7 139.72a40 40 0 0056.58 56.58l9.94-9.94a8 8 0 0111.32 0m70.08-138a56.08 56.08 0 00-79.22 0l-9.94 9.95a8 8 0 0011.32 11.31l9.94-9.94a40 40 0 0156.58 56.58l-24.12 24.14a40 40 0 01-54.85 1.6 8 8 0 10-10.64 12 56 56 0 0076.81-2.26l24.12-24.12a56.08 56.08 0 000-79.24z"
            />
        </Svg>
    )
}

export default SvgComponent
