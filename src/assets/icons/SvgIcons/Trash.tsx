import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
const SvgComponent = (props: SvgProps) => (
    <Svg width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
        <Path
            d="M6.328 3.234h-.14c.077 0 .14-.063.14-.14v.14zm0 0h5.344v-.14c0 .077.063.14.14.14h-.14V4.5h1.265V3.094c0-.62-.504-1.125-1.124-1.125H6.186c-.62 0-1.125.504-1.125 1.125V4.5h1.266V3.234zm8.86 1.266H2.812a.562.562 0 00-.562.563v.562c0 .077.063.14.14.14h1.062l.435 9.194c.028.6.523 1.072 1.123 1.072h7.98c.601 0 1.095-.47 1.123-1.072l.435-9.193h1.061c.078 0 .141-.064.141-.141v-.563a.562.562 0 00-.563-.562zm-2.333 10.266h-7.71l-.425-9h8.56l-.425 9z"
            fill={props.fill ? props.fill : '#292D32'}
        />
    </Svg>
)
export default SvgComponent
