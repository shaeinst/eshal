import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
const SvgComponent = (props: SvgProps) => (
    <Svg width={18} height={19} viewBox="0 0 20 21" fill="none" {...props}>
        <Path
            fill={props.fill ? props.fill : '#292D32'}
            d="M15.27 20.92c-.493 0-1.126-.16-1.917-.628l-2.782-1.658c-.289-.169-.847-.169-1.126 0l-2.792 1.658c-1.647.984-2.615.59-3.052.272-.428-.319-1.098-1.134-.66-3.007l.66-2.876c.075-.3-.074-.815-.298-1.04L.996 11.318C-.158 10.156-.065 9.163.093 8.676c.158-.487.66-1.349 2.261-1.62l2.969-.497c.279-.047.679-.347.8-.6L7.77 2.654C8.514 1.145 9.49.92 10.003.92s1.489.225 2.233 1.733l1.638 3.297c.13.253.53.553.81.6l2.968.496c1.61.272 2.112 1.134 2.26 1.62.15.488.243 1.48-.902 2.643l-2.307 2.332c-.224.225-.363.73-.298 1.04l.66 2.876c.428 1.873-.232 2.688-.66 3.007a1.895 1.895 0 0 1-1.135.356Zm-5.267-3.822c.456 0 .912.112 1.275.328l2.782 1.658c.81.487 1.321.487 1.517.346.195-.14.335-.637.13-1.555L15.047 15c-.178-.777.111-1.78.67-2.35l2.307-2.324c.456-.46.66-.909.567-1.218-.102-.309-.53-.562-1.163-.665l-2.968-.496c-.716-.122-1.498-.703-1.824-1.359L11 3.29c-.298-.6-.67-.956-.996-.956-.326 0-.698.356-.986.956L7.37 6.587c-.326.656-1.108 1.237-1.824 1.359l-2.96.496c-.632.103-1.06.356-1.162.665-.103.31.111.768.567 1.218L4.3 12.648c.558.562.847 1.574.67 2.351l-.66 2.876c-.215.928-.066 1.415.13 1.555.195.14.697.131 1.516-.346l2.783-1.658c.353-.216.81-.328 1.265-.328Z"
        />
    </Svg>
)
export default SvgComponent
