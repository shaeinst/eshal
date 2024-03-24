import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
const SvgComponent = (props: SvgProps) => (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
        <Path
            d="M3.75 14.34v1.493a.417.417 0 00.417.417H5.66c.11 0 .216-.044.294-.122l7.083-7.083-2.083-2.083-7.083 7.083a.417.417 0 00-.122.294zm8.825-8.998l2.083 2.083 1.003-1.002a.833.833 0 000-1.179l-.905-.905a.833.833 0 00-1.178 0l-1.003 1.003z"
            stroke={props.stroke ? props.stroke : '#292D32'}
        />
    </Svg>
)
export default SvgComponent
