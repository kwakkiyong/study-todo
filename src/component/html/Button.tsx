import * as React from "react";

// 타입정의 : React.ComponentPropsWithRef<'button'> 은 button 태그에서 사용할 수 있는 모든 속성을 사용 가능.
type ButtonProps = React.ComponentPropsWithRef<'button'>;

export default function Button(props: ButtonProps) {
    const { children, ...rest} = props; // 구조 분해 할당

    return (
        /* <button> 태그에 {...rest}를 사용하면 props로 전달받은 속성들이 버튼 요소에 그대로 적용됨. */
        <button {...rest}>{children}</button>
    );
}