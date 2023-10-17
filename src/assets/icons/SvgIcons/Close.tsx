import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
const SVGComponent = (props: SvgProps) => (
    <Svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        {...props}>
        <Path
            d="M19.5563 0.458855C18.9647 -0.132726 18.0091 -0.132726 17.4175 0.458855L10 7.86121L2.58248 0.443686C1.9909 -0.147895 1.03527 -0.147895 0.443686 0.443686C-0.147895 1.03527 -0.147895 1.9909 0.443686 2.58248L7.86121 10L0.443686 17.4175C-0.147895 18.0091 -0.147895 18.9647 0.443686 19.5563C1.03527 20.1479 1.9909 20.1479 2.58248 19.5563L10 12.1388L17.4175 19.5563C18.0091 20.1479 18.9647 20.1479 19.5563 19.5563C20.1479 18.9647 20.1479 18.0091 19.5563 17.4175L12.1388 10L19.5563 2.58248C20.1327 2.00607 20.1327 1.03527 19.5563 0.458855Z"
            fill="black"
        />
    </Svg>
)
export default SVGComponent
