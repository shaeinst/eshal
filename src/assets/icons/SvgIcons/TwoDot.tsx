import * as React from 'react'
import Svg, { Rect } from 'react-native-svg'

type PropsType = {
    opt?: {
        fill?: string
        stroke?: string
        height?: string
        width?: string
    }
    type?: 'first' | 'last'
}

const SVGComponent = (props: PropsType) => (
    <Svg width={26} height={3} viewBox="0 0 26 3" fill="none" {...props.opt}>
        {props.type === 'first' ? (
            <>
                <Rect width={16} height={3} rx={1.5} fill="#F9F2F2" />
                <Rect x={18} width={8} height={3} rx={1.5} fill="#D5CADE" />
            </>
        ) : (
            <>
                <Rect width={8} height={3} rx={1.5} fill="#D5CADE" />
                <Rect x={10} width={16} height={3} rx={1.5} fill="#F9F2F2" />
            </>
        )}
    </Svg>
)
export default SVGComponent
