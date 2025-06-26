import classNames from "classnames";
import { MenuContext } from "./menu";
import { useContext } from "react";

export interface MenuItemProps {
  index: number; //高亮，和defaultindex对比
  className?: string; //自定义类名
  disabled?: boolean; //是否禁用
  style?: React.CSSProperties; //样式
  children?: React.ReactNode; //子元素
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, className, disabled, style, children } = props;
  
  const context = useContext(MenuContext);

  const classes = classNames("menu-item", className, {
    "is-disabled": disabled,
    //从父组件Menu中获取当前选中项的索引
    "is-active": context.index === index,//true的时候选中
  });
  const handleClick = () => {
    if (context.onSelect && !disabled) {
      context.onSelect(index); //确保index是number类型
    }
  };
  return (
    <li
      className={classes}
      style={style}
      data-index={index}
      onClick={handleClick}
    >
      {children}
    </li>
  );
};
MenuItem.displayName = "MenuItem"; //方便调试
export default MenuItem;
