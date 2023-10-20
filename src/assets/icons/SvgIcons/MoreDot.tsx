import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
const SVGComponent = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 29 29" fill="none" {...props}>
        <Path
            d="M14.3113 16.4794C15.5999 16.4794 16.6446 15.4348 16.6446 14.1461C16.6446 12.8574 15.5999 11.8128 14.3113 11.8128C13.0226 11.8128 11.9779 12.8574 11.9779 14.1461C11.9779 15.4348 13.0226 16.4794 14.3113 16.4794Z"
            fill={props.fill ? props.fill : '#657786'}
        />
        <Path
            d="M22.4779 16.4794C23.7666 16.4794 24.8113 15.4348 24.8113 14.1461C24.8113 12.8574 23.7666 11.8128 22.4779 11.8128C21.1893 11.8128 20.1446 12.8574 20.1446 14.1461C20.1446 15.4348 21.1893 16.4794 22.4779 16.4794Z"
            fill={props.fill ? props.fill : '#657786'}
        />
        <Path
            d="M6.1446 16.4794C7.43326 16.4794 8.47793 15.4348 8.47793 14.1461C8.47793 12.8574 7.43326 11.8128 6.1446 11.8128C4.85593 11.8128 3.81126 12.8574 3.81126 14.1461C3.81126 15.4348 4.85593 16.4794 6.1446 16.4794Z"
            fill={props.fill ? props.fill : '#657786'}
        />
    </Svg>
)
export default SVGComponent
