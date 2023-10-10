import React from 'react';
import {Dimensions} from 'react-native';
import {Svg, Path} from 'react-native-svg';

const Welcome = () => {
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    return (
        <Svg
            width={screenWidth}
            height={screenHeight}
            // viewBox={"0 0 390 844"}
            fill="none"
            // resizeMode="contain"
        >
            <Path
                d="M390 -19H0V504.267C0 691.706 346.456 539.412 390 844V-19Z"
                fill="#6E7CF6"
            />
        </Svg>
    );
};

export default Welcome;
