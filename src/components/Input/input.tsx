import React, { type ReactElement, type InputHTMLAttributes } from "react";
import classNames from "classnames";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import Icon from "../Icon/icon";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  disabled?: boolean; //是否禁用
  size?: "lg" | "sm" | undefined; //输入框大小(和InputHTMLAttributes里面的size冲突了，所以用ts中的omit忽略size)
  icon?: IconProp;
  prepend?: string | ReactElement; //前缀
  append?: string | ReactElement; //后缀
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; //调整event类型
}

export const Input: React.FC<InputProps> = (props) => {
  //1.解构props
  const {
    disabled = false,
    size,
    icon,
    prepend,
    append,
    className,
    style,
    ...restProps //其他原生属性
  } = props;
  //2.根据属性生成类名
  const classes = classNames("cream-input-wrapper", {
    [`input-size-${size}`]: size,
    "is-disabled": disabled,
    "input-group": prepend || append, //如果有前缀或后缀，则添加input-group类名
    //保证“条件”值一定是 true/false，更语义化
    "input-group-prepend": !!prepend, //如果有前缀，则添加input-group-prepand类名
    "input-group-append": !!append, //如果有后缀，则添加input-group-append类名
  });
  const fixControlledValue = (value: any) => {
    if (value === null || value === "undefined") {
      return "";
    }
    return value;
  };
  //   避免同时把 value 和 defaultValue 都传给原生 <input>，从而引发 React 的混用警告和潜在的状态不一致问题
  if ("value" in props) {
    delete restProps.defaultValue; //如果是受控组件，删除defaultValue属性
    restProps.value = fixControlledValue(props.value); //如果是受控组件，确保value是一个字符串
  }
  return (
    //根据属性判断是否添加特定节点
    <div className={classes} style={style}>
      {prepend && <div className="cream-input-group-prepend">{prepend}</div>}
      {/* 可选图标 */}
      {icon && <div className="icon-wrapper"><Icon icon={icon} title={`title-${icon}`}/></div>}
      {/* input元素 */}
      <input
        className="cream-input-inner"
        disabled={disabled}
        {...restProps}
      />
      {append && <div className="cream-input-group-append">{append}</div>}
    </div>
  );
};
export default Input;