import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

interface PropsInterface extends SvgProps {
    isOn?: boolean
}

const SvgComponent = (props: PropsInterface) => (
    <Svg width={26} height={14} fill="none" {...props}>
        {props.isOn ? (
            <>
                <Path
                    fill="#038B8B"
                    stroke="#038B8B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.446}
                    d="M19 8.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z"
                />
                <Path stroke="#038B8B" d="M19 13H7A6 6 0 0 1 7 1h12a6 6 0 0 1 0 12Z" />
            </>
        ) : (
            <>
                <Path
                    fill={props.fill ? props.fill : '#657786'}
                    stroke={props.stroke ? props.stroke : '#657786'}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.446}
                    d="M7 8.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z"
                />
                <Path
                    stroke={props.stroke ? props.stroke : '#657786'}
                    d="M19 13H7A6 6 0 0 1 7 1h12a6 6 0 0 1 0 12Z"
                />
            </>
        )}
    </Svg>
)

export default SvgComponent
