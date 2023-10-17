import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
const SVGComponent = (props: SvgProps) => (
    <Svg width={27} height={28} viewBox="0 0 27 28" fill="none" {...props}>
        <Path
            d="M12.1038 22.5714C17.684 22.5714 22.2077 17.9664 22.2077 12.2857C22.2077 6.60507 17.684 2 12.1038 2C6.52365 2 2 6.60507 2 12.2857C2 17.9664 6.52365 22.5714 12.1038 22.5714Z"
            stroke="#657786"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M19.6818 20L25.5757 26"
            stroke="#657786"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)
export default SVGComponent
