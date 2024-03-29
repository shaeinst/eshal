import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const SVGComponent = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 28 28" fill="none" {...props}>
        <Path
            d="M2.43757 15.1493C1.98158 11.985 1.75358 10.4022 2.40277 9.04983C3.05075 7.69747 4.43192 6.87428 7.19306 5.23032L8.85502 4.24035C11.3606 2.74638 12.6157 2 14.0005 2C15.3853 2 16.6392 2.74638 19.146 4.24035L20.8079 5.23032C23.5679 6.87428 24.949 7.69747 25.5982 9.04983C26.2462 10.4022 26.0182 11.985 25.5622 15.1493L25.2286 17.4736C24.6442 21.5391 24.3515 23.5707 22.9415 24.7851C21.5315 25.9994 19.464 25.9994 15.3277 25.9994H12.6733C8.53702 25.9994 6.46947 25.9994 5.05951 24.7851C3.64954 23.5707 3.35675 21.5391 2.77236 17.4736L2.43757 15.1493Z"
            stroke={props.stroke ? props.stroke : '#657786'}
            strokeWidth={2.5}
        />
        <Path
            d="M15.7936 19.9306V24.0684"
            stroke={props.stroke ? props.stroke : '#657786'}
            strokeWidth={2.5}
            strokeLinecap="round"
        />
    </Svg>
)
export default SVGComponent
