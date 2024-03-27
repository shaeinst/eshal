import * as React from 'react'
import Svg, { SvgProps, Path, Rect } from 'react-native-svg'

interface PropsInterface extends SvgProps {
    checked?: boolean
}
const SvgComponent = (props: PropsInterface) => (
    <Svg width={22} height={17} viewBox="0 0 22 17" fill="none" {...props}>
        <Rect
            x={0.75}
            y={0.75}
            width={16.5}
            height={15.5}
            rx={3.25}
            fill={props.checked ? (props.fill ? props.fill : '#ff6666') : props.fill ? props.fill : '#000'}
            stroke={props.stroke ? props.stroke : '#fff'}
            strokeWidth={1.5}
        />
        {props.checked ? (
            <Path
                d="M21.042 1.292l-11 11L5 7.252l1.293-1.293 3.749 3.74L19.749 0l1.293 1.292z"
                fill={props.fill ? props.fill : '#fff'}
            />
        ) : null}
    </Svg>
)
export default SvgComponent
