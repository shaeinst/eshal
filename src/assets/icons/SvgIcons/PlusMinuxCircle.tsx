import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

interface PropsInterface extends SvgProps {
    minus?: boolean
}

function SvgComponent(props: PropsInterface) {
    //
    return (
        <Svg width={20} height={20} viewBox="0 0 18 18" fill="none" {...props}>
            <Path
                d="M9 2.25c3.713 0 6.75 3.037 6.75 6.75S12.713 15.75 9 15.75c-3.712 0-6.75-3.037-6.75-6.75S5.288 2.25 9 2.25zm0-1.125C4.67 1.125 1.125 4.669 1.125 9c0 4.331 3.544 7.875 7.875 7.875 4.332 0 7.875-3.544 7.875-7.875 0-4.331-3.543-7.875-7.875-7.875z"
                fill={props.fill ? props.fill : '#292D32'}
            />
            <Path
                d={
                    props.minus
                        ? 'M4.5 8.438h9v1.124h-9V8.438z'
                        : 'M13.5 8.438H9.563V4.5H8.438v3.938H4.5v1.124h3.938V13.5h1.125V9.562H13.5V8.438z'
                }
                fill={props.fill ? props.fill : '#292D32'}
            />
        </Svg>
    )
}
export default SvgComponent
