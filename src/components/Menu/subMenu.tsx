import React, { useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu"; // 上下文
import type { MenuItemProps } from "./menuItem";

export interface SubMenuProps {
  index?: number; //子菜单的索引
  className?: string; //自定义类名
  title: string; //子菜单标题
  children?: React.ReactNode; //子元素
}

const SubMenu: React.FC<SubMenuProps> = ({
  index,
  className,
  title,
  children,
}) => {
  const context = useContext(MenuContext); // 获取上下文
  const classes = classNames("menu-item submenu-item", className, {
    "is-active": context.index === index, // 如果当前菜单项被选中
  });
  //确保子元素是MenuItem,需要对子元素进行处理
  const renderchildren = () => {
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as React.ReactElement<MenuItemProps>;
      if ((childElement.type as any).displayName === "MenuItem") {
        return childElement;
      } else {
        console.error(
          "Warning: SubMenu has a child which is not a MenuItem component"
        );
      }
    });
    return <ul className="cream-submenu">{childrenComponent}</ul>;
  };
  return (
    <li key={index} className={classes}>
      <div className="submenu-title">{title}</div>
      {renderchildren()}
    </li>
  );
};
SubMenu.displayName = "SubMenu"; // 设置静态属性，方便调试
export default SubMenu;
