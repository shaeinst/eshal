import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
const SVGComponent = (props: SvgProps) => (
    <Svg width={23} height={24} viewBox="0 0 23 24" fill="none" {...props}>
        <Path
            d="M16.987 3.28863L16.456 4.17375C16.3824 4.29995 16.36 4.44955 16.3933 4.59178C16.4267 4.73401 16.5133 4.85805 16.6353 4.93837C18.2685 6.05248 19.5019 7.66053 20.1545 9.52675C20.8072 11.393 20.8448 13.4192 20.2618 15.3083C19.6788 17.1975 18.506 18.8502 16.9152 20.0241C15.3244 21.198 13.3993 21.8314 11.4223 21.8314C9.4452 21.8314 7.52015 21.198 5.92935 20.0241C4.33854 18.8502 3.16568 17.1975 2.5827 15.3083C1.99973 13.4192 2.03732 11.393 2.68996 9.52675C3.3426 7.66053 4.57597 6.05248 6.20922 4.93837C6.33099 4.85797 6.41736 4.734 6.4506 4.59191C6.48384 4.44982 6.46142 4.3004 6.38795 4.17432L5.85917 3.29149C5.81951 3.22473 5.76681 3.16665 5.70421 3.12071C5.64161 3.07478 5.57039 3.04193 5.49481 3.02412C5.41924 3.00632 5.34084 3.00393 5.26432 3.0171C5.1878 3.03027 5.11471 3.05872 5.04943 3.10076C3.01822 4.46614 1.47936 6.44791 0.659632 8.75401C-0.160095 11.0601 -0.217321 13.5686 0.496387 15.9096C1.2101 18.2507 2.65698 20.3006 4.62381 21.7572C6.59064 23.2138 8.97336 24 11.4208 24C13.8683 24 16.251 23.2138 18.2178 21.7572C20.1847 20.3006 21.6316 18.2507 22.3453 15.9096C23.059 13.5686 23.0017 11.0601 22.182 8.75401C21.3623 6.44791 19.8234 4.46614 17.7922 3.10076C17.7276 3.05838 17.655 3.02957 17.5789 3.01607C17.5027 3.00257 17.4247 3.00467 17.3494 3.02223C17.2741 3.0398 17.2032 3.07247 17.1409 3.11826C17.0786 3.16405 17.0263 3.22201 16.987 3.28863Z"
            fill="#657786"
        />
        <Path
            d="M11.991 0H10.8489C10.5336 0 10.2779 0.255664 10.2779 0.571041V10.8498C10.2779 11.1652 10.5336 11.4208 10.8489 11.4208H11.991C12.3064 11.4208 12.5621 11.1652 12.5621 10.8498V0.571041C12.5621 0.255664 12.3064 0 11.991 0Z"
            fill="#657786"
        />
    </Svg>
)
export default SVGComponent