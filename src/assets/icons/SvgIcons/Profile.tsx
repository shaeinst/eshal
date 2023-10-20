import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
const SVGComponent = (props: SvgProps) => (
    <Svg width={20} height={24} viewBox="0 0 20 24" fill="none" {...props}>
        <Path
            d="M16.395 14.3969C16.7472 14.397 17.0958 14.467 17.4211 14.6028C17.7463 14.7386 18.0419 14.9376 18.2907 15.1883C18.5396 15.4391 18.737 15.7368 18.8716 16.0643C19.0062 16.3919 19.0754 16.7429 19.0753 17.0974V17.7876C19.0753 18.8606 18.6937 19.8988 18.0022 20.7137C16.1303 22.9138 13.2844 24 9.53346 24C5.78255 24 2.93778 22.9138 1.07067 20.7113C0.37987 19.8968 0.000247099 18.861 0 17.79V17.0962C0 16.3803 0.282507 15.6937 0.785374 15.1875C1.28824 14.6813 1.97027 14.3969 2.68144 14.3969H16.395ZM16.395 16.1972H2.68024C2.56277 16.1971 2.44642 16.2203 2.33786 16.2654C2.2293 16.3106 2.13066 16.3769 2.04759 16.4605C1.96453 16.5442 1.89866 16.6435 1.85378 16.7527C1.8089 16.862 1.78588 16.9792 1.78603 17.0974V17.79C1.78603 18.4321 2.01495 19.0538 2.42986 19.5423C3.92379 21.3055 6.269 22.1996 9.53227 22.1996C12.7979 22.1996 15.1431 21.3055 16.6418 19.5435C17.0575 19.0542 17.2859 18.4314 17.2857 17.7876V17.0962C17.2857 16.858 17.1917 16.6295 17.0245 16.461C16.8573 16.2924 16.6317 16.1976 16.395 16.1972ZM9.53346 0C10.3163 -1.17434e-08 11.0915 0.155225 11.8148 0.456814C12.5381 0.758402 13.1952 1.20045 13.7488 1.75771C14.3024 2.31497 14.7415 2.97654 15.0411 3.70464C15.3407 4.43274 15.4949 5.21311 15.4949 6.0012C15.4949 6.78929 15.3407 7.56966 15.0411 8.29776C14.7415 9.02586 14.3024 9.68743 13.7488 10.2447C13.1952 10.802 12.5381 11.244 11.8148 11.5456C11.0915 11.8472 10.3163 12.0024 9.53346 12.0024C7.9524 12.0024 6.4361 11.3701 5.31812 10.2447C4.20014 9.11925 3.57207 7.59282 3.57207 6.0012C3.57207 4.40958 4.20014 2.88315 5.31812 1.75771C6.4361 0.632268 7.9524 0 9.53346 0ZM9.53346 1.80036C8.98546 1.80036 8.44282 1.90902 7.93653 2.12013C7.43025 2.33124 6.97022 2.64067 6.58272 3.03076C6.19523 3.42084 5.88785 3.88394 5.67814 4.39361C5.46842 4.90328 5.36049 5.44954 5.36049 6.0012C5.36049 6.55286 5.46842 7.09912 5.67814 7.60879C5.88785 8.11846 6.19523 8.58156 6.58272 8.97164C6.97022 9.36173 7.43025 9.67116 7.93653 9.88227C8.44282 10.0934 8.98546 10.202 9.53346 10.202C10.6402 10.202 11.7016 9.75945 12.4842 8.97164C13.2668 8.18383 13.7064 7.11533 13.7064 6.0012C13.7064 4.88707 13.2668 3.81857 12.4842 3.03076C11.7016 2.24295 10.6402 1.80036 9.53346 1.80036Z"
            fill={props.fill ? props.fill : '#657786'}
        />
    </Svg>
)
export default SVGComponent
