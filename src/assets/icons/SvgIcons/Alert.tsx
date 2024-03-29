import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
const SVGComponent = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 25 27" fill="none" {...props}>
        <Path
            d="M12.5974 7.28834V11.2546M12.6212 2C8.23805 2 4.68867 5.54938 4.68867 9.93251V12.4338C4.68867 13.2437 4.35517 14.4586 3.93829 15.1494L2.42564 17.6745C1.49661 19.2347 2.13978 20.9737 3.85492 21.5454C9.54975 23.4392 15.7045 23.4392 21.3993 21.5454C21.7751 21.4201 22.1179 21.2119 22.4024 20.9363C22.687 20.6606 22.9059 20.3246 23.0431 19.953C23.1803 19.5814 23.2323 19.1837 23.1952 18.7893C23.158 18.3949 23.0328 18.0139 22.8286 17.6745L21.316 15.1494C20.8991 14.4586 20.5656 13.2318 20.5656 12.4338V9.93251C20.5537 5.5732 16.9805 2 12.6212 2Z"
            stroke={props.stroke ? props.stroke : '#657786'}
            strokeWidth={2.5}
            strokeMiterlimit={10}
            strokeLinecap="round"
        />
        <Path
            d="M16.5636 22.0338C16.5636 24.2134 14.777 26 12.5974 26C11.5135 26 10.513 25.5474 9.79835 24.8328C9.08371 24.1181 8.6311 23.1176 8.6311 22.0338"
            stroke={props.stroke ? props.stroke : '#657786'}
            strokeWidth={1.5}
            strokeMiterlimit={10}
        />
    </Svg>
)
export default SVGComponent
