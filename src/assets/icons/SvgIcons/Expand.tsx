import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

interface PropsInterface extends SvgProps {
    collapse?: boolean
}

const SvgComponent = (props: PropsInterface) => (
    <Svg width={14} height={14} viewBox="0 0 16 16" fill="none" {...props}>
        <Path
            fill={props.fill ? props.fill : '#657786'}
            d={
                props.collapse
                    ? 'M8.994 6.006a1 1 0 001 1h5a1 1 0 100-2h-2.57l3.28-3.29a1 1 0 00-.325-1.64 1 1 0 00-1.095.22l-3.29 3.29v-2.58a1 1 0 00-2 0v5zM.296 15.704a.998.998 0 001.42 0l3.29-3.28v2.57a1 1 0 102 0v-5a1 1 0 00-1-1h-5a1 1 0 000 2h2.58l-3.29 3.29a1 1 0 000 1.42z'
                    : 'M16 1a1 1 0 0 0-1-1h-5a1 1 0 0 0 0 2h2.57L9.29 5.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L14 3.42V6a1 1 0 0 0 2 0V1ZM6.71 9.29a1 1 0 0 0-1.42 0L2 12.57V10a1 1 0 1 0-2 0v5a1 1 0 0 0 1 1h5a1 1 0 1 0 0-2H3.42l3.29-3.29a.999.999 0 0 0 0-1.42Z'
            }
        />
    </Svg>
)
export default SvgComponent
