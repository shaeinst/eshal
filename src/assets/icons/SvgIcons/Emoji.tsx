import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
const SvgComponent = (props: SvgProps) => (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
        <Path
            d="M12 15a2 2 0 100-4 2 2 0 000 4zm10-2a2 2 0 11-4 0 2 2 0 014 0zM9.553 19.106a1 1 0 011.338.44l.003.006.034.058c.035.057.093.146.177.259.169.225.44.536.832.85C12.71 21.337 13.993 22 16 22c2.007 0 3.29-.663 4.063-1.28.393-.315.664-.626.832-.851.076-.101.147-.207.211-.317l.004-.007a1 1 0 011.785.902l-.002.003v.002l-.004.006-.008.015a4.957 4.957 0 01-.385.595c-.342.452-.74.86-1.184 1.213C20.21 23.163 18.493 24 16 24c-2.493 0-4.21-.837-5.312-1.72a6.762 6.762 0 01-1.183-1.211 5.236 5.236 0 01-.386-.596l-.008-.015-.003-.006-.001-.003-.001-.002a1 1 0 01.447-1.341zM16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zM4 16C4 9.373 9.373 4 16 4s12 5.373 12 12-5.373 12-12 12S4 22.627 4 16z"
            fill={props.fill ? props.fill : '#292D32'}
        />
    </Svg>
)
export default SvgComponent