import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
const SvgComponent = (props: SvgProps) => (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
        <Path
            d="M29.6 23.511L18.669 4.527a3.095 3.095 0 00-5.338 0L2.4 23.511a2.939 2.939 0 000 2.965A3.044 3.044 0 005.069 28H26.93a3.045 3.045 0 002.666-1.524 2.938 2.938 0 00.003-2.965zm-1.734 1.964a1.063 1.063 0 01-.935.525H5.07a1.064 1.064 0 01-.935-.525.949.949 0 010-.965L15.065 5.526a1.094 1.094 0 011.875 0L27.871 24.51a.948.948 0 01-.005.965zM15 18v-5a1 1 0 112 0v5a1 1 0 01-2 0zm2.5 4.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
            fill={props.fill ? props.fill : '#292D32'}
        />
    </Svg>
)
export default SvgComponent
