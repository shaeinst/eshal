import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
const SvgComponent = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
        <Path
            fill={props.fill ? props.fill : '#038B8B'}
            d="M18.555 10.731a.737.737 0 0 1-.737-.65c-.246-2.203-1.453-4.185-3.316-5.446a.714.714 0 0 1-.184-1.011.75.75 0 0 1 1.033-.18c2.221 1.511 3.654 3.874 3.951 6.486.041.4-.256.761-.665.801h-.082ZM1.544 10.781h-.071a.735.735 0 0 1-.666-.8c.277-2.613 1.69-4.976 3.89-6.498a.76.76 0 0 1 1.034.17.72.72 0 0 1-.174 1.012C3.714 5.946 2.517 7.928 2.29 10.12a.747.747 0 0 1-.747.661ZM14.084 19.11c-1.26.59-2.61.89-4.023.89a9.301 9.301 0 0 1-4.186-.971.708.708 0 0 1-.327-.971c.174-.36.624-.5.993-.33.644.32 1.33.54 2.026.67.942.18 1.904.19 2.845.03a7.857 7.857 0 0 0 2.017-.63c.378-.17.829-.03.993.34.184.36.04.8-.338.971ZM10.051 0C8.465 0 7.165 1.261 7.165 2.823s1.29 2.823 2.886 2.823c1.597 0 2.886-1.261 2.886-2.823S11.647 0 10.051 0ZM2.886 11.872C1.3 11.872 0 13.133 0 14.695s1.29 2.823 2.886 2.823c1.597 0 2.887-1.261 2.887-2.823s-1.3-2.823-2.887-2.823ZM17.114 11.872c-1.587 0-2.887 1.261-2.887 2.823s1.29 2.823 2.887 2.823c1.596 0 2.886-1.261 2.886-2.823s-1.29-2.823-2.886-2.823Z"
        />
    </Svg>
)
export default SvgComponent