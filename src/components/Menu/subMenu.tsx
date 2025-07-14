import React, { useContext, useRef, useState } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu"; // 上下文
import type { MenuItemProps } from "./menuItem";
import Icon from "../Icon/icon";
import Transition from "../Transition/transition";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";


export interface SubMenuProps {
  index?: string; //子菜单的索引
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
  const openedSubMenus = context.defaultOpenSubMenus as Array<string>; // 判断是否是垂直模式
  const isOpen =
    index && context.mode === "vertical"
      ? openedSubMenus.includes(index)
      : false;
  // 如果是垂直模式，且 openedSubMenus 里包含了这个 SubMenu 的 index，就让它初始状态是展开的。
  const [menuOpen, setmenuOpen] = useState(isOpen); // 控制子菜单的展开和收起
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); // 阻止默认行为
    setmenuOpen(!menuOpen); // 切换子菜单的展开状态
  };
  let timer: any;
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer); // 清除之前的定时器
    e.preventDefault(); // 阻止默认行为
    timer = setTimeout(() => {
      setmenuOpen(toggle); // 切换子菜单的展开状态
    }, 300); // 延时300毫秒
  };
  const clickEvents =
    context.mode === "vertical" ? { onClick: handleClick } : {};
  const hoverEvents =
    context.mode !== "vertical"
      ? {
          onMouseEnter: (e: React.MouseEvent) => {
            handleMouse(e, true);
          },
          onMouseLeave: (e: React.MouseEvent) => {
            handleMouse(e, false);
          },
        }
      : {};
  const classes = classNames("menu-item submenu-item", className, {
    "is-active": context.index === index, // 如果当前菜单项被选中
    "is-opened": menuOpen, // 如果子菜单展开
    "is-vertical": context.mode === "vertical", // 如果是垂直模式
  });
  const nodeRef = useRef<HTMLUListElement>(null);
  //确保子元素是MenuItem,需要对子元素进行处理
  const renderchildren = () => {
    const subMenuClasses = classNames("cream-submenu", {
      "menu-opened": menuOpen, // 如果子菜单展开
    });
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as React.ReactElement<MenuItemProps>;
      if ((childElement.type as any).displayName === "MenuItem") {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`, // 确保子菜单项有唯一的索引
        });
      } else {
        console.error(
          "Warning: SubMenu has a child which is not a MenuItem component"
        );
      }
    });
    return (
      <Transition
        in={menuOpen}
        timeout={300}
        animation="zoom-in-top"
        // nodeRef={nodeRef}
        wrapper
      >
        <ul className={subMenuClasses}>{childrenComponent}</ul>
      </Transition>
    );
  };
  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div className="submenu-title" {...clickEvents}>
        {title}
        <Icon icon={faAngleDown} className="arrow-icon"></Icon>
      </div>
      {renderchildren()}
    </li>
  );
};
SubMenu.displayName = "SubMenu"; // 设置静态属性，方便调试
export default SubMenu;
