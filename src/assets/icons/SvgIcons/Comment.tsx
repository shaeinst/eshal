import * as React from 'react'
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg'
const SvgComponent = (props: SvgProps) => (
    <Svg width={18} height={18} viewBox="0 0 20 20" fill="none" {...props}>
        <G strokeLinecap="round" strokeLinejoin="round" clipPath="url(#a)">
            <Path
                stroke={props.stroke ? props.stroke : '#292D32'}
                strokeMiterlimit={10}
                strokeWidth={1.5}
                d="M7.083 15.833h-.416c-3.334 0-5-.833-5-5V6.667c0-3.334 1.666-5 5-5h6.666c3.334 0 5 1.666 5 5v4.166c0 3.334-1.666 5-5 5h-.416a.845.845 0 0 0-.667.334L11 17.833c-.55.734-1.45.734-2 0l-1.25-1.666c-.133-.184-.442-.334-.667-.334Z"
            />
            <Path
                stroke={props.stroke ? props.stroke : '#292D32'}
                strokeWidth={2}
                d="M13.33 9.167h.008m-3.342 0h.008m-3.341 0h.006"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h20v20H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)
export default SvgComponent
