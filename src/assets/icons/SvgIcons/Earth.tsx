import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
const SvgComponent = (props: SvgProps) => (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
        <Path
            d="M16 29.333c-1.845 0-3.578-.35-5.2-1.05a13.485 13.485 0 01-4.233-2.85c-1.2-1.2-2.15-2.61-2.85-4.233-.7-1.622-1.05-3.356-1.05-5.2 0-1.845.35-3.578 1.05-5.2.7-1.622 1.65-3.033 2.85-4.233 1.2-1.2 2.61-2.15 4.233-2.85 1.622-.7 3.355-1.05 5.2-1.05 1.844 0 3.578.35 5.2 1.05 1.622.7 3.033 1.65 4.233 2.85 1.2 1.2 2.15 2.61 2.851 4.233.7 1.622 1.05 3.355 1.05 5.2 0 1.844-.35 3.578-1.051 5.2a13.487 13.487 0 01-2.85 4.233c-1.2 1.2-2.61 2.15-4.233 2.851-1.622.7-3.356 1.05-5.2 1.05zM14.667 26.6V24c-.734 0-1.361-.26-1.883-.783A2.573 2.573 0 0112 21.333V20l-6.4-6.4c-.067.4-.128.8-.183 1.2-.055.4-.083.8-.084 1.2 0 2.689.884 5.044 2.651 7.067 1.767 2.022 3.995 3.2 6.683 3.533zm9.2-3.4c.444-.489.844-1.017 1.2-1.583.355-.566.65-1.155.882-1.766.234-.612.412-1.24.534-1.884.121-.645.183-1.3.184-1.967 0-2.178-.606-4.167-1.818-5.967A10.273 10.273 0 0020 6.133v.534c0 .733-.26 1.361-.783 1.884a2.562 2.562 0 01-1.884.782h-2.666V12c0 .378-.128.695-.384.95a1.285 1.285 0 01-.95.383h-2.666V16h8c.377 0 .694.128.95.384s.384.572.383.95v4h1.333c.578 0 1.1.172 1.567.517.467.345.789.794.967 1.349z"
            fill={props.fill ? props.fill : '#292D32'}
        />
    </Svg>
)
export default SvgComponent
