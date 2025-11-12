import * as React from "react";

// Omit<타입,'속성'> 은 타입스크립트에서 해당 타입에서 특정 속성만 제외한 새 타입을 만들 때 사용.
type CheckboxProps = Omit<React.ComponentPropsWithRef<'input'>, 'type'> & {
    type?: 'checkbox';
    parentClassName: string;
};

export default function Checkbox(props: CheckboxProps) {
    const {parentClassName, children, ...rest} = props; // 구조 분해 할당

    return (
        <div className={parentClassName}>
            <input {...rest} />
            <label>{children}</label>
        </div>
    );
}