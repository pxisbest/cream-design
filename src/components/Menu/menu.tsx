import React from "react";
import classNames from "classnames";
import { useState, createContext } from "react";
import { render } from '@testing-library/react';
import type { MenuItemProps } from './menuItem';

type MenuMode = "horizontal" | "vertical";
//onSelect?用了两次，可以直接写成一个type简化
type SelectCallback = (selectedIndex: string) => void;
export interface MenuProps {
  defaultIndex?: string; //是否高亮-从number改成string类型了-为了submenu添加事件
  className?: string;
  mode?: MenuMode; //菜单模式
  style?: React.CSSProperties; //样式
  onSelect?: SelectCallback; // 选中某一项时的回调
  children?: React.ReactNode; //子元素
  defaultOpenSubMenus?: string[]; //默认展开的子菜单
}

//要传递什么给子组件
interface IMenuContext {
  index: string; //当前选中项的索引
  onSelect?: SelectCallback;
  mode?: MenuMode; //菜单模式
  defaultOpenSubMenus?: string[]; //默认展开的子菜单
}
//创建上下文
export const MenuContext = createContext<IMenuContext>({ index:' 0' });

const Menu: React.FC<MenuProps> = (props) => {
  const {
    className,
    mode = "horizontal", //默认horizontal
    style,
    defaultIndex = "0",
    onSelect,
    children,
    defaultOpenSubMenus = [], //默认展开的子菜单
  } = props;
  //子组件切换需要改变状态
  const [currentActive, setActive] = useState(defaultIndex);
  const classes = classNames("cream-menu", className, {
    //如果 mode 是 vertical，就会加上 menu-vertical。
    [`menu-vertical`]: mode === "vertical",
    [`menu-horizontal`]: mode !== "vertical",
  });
  const handleClick = (index: string) => {
    setActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };
  const passedContext: IMenuContext = {
    index: currentActive?currentActive:'0',
    onSelect: handleClick,
    mode:mode,
    defaultOpenSubMenus: defaultOpenSubMenus, //传递默认展开的子菜单
  };
  const renderChildren = () => {
    //传入了children
    return React.Children.map(children, (child, index) => {
      //确保子元素是MenuItem
      const childElement = child as React.ReactElement<MenuItemProps>;
      if (childElement.type && (childElement.type as any).displayName === "MenuItem"||"SubMenu") {
        return React.cloneElement(childElement, {
          index:index.toString(), //将索引转换为字符串
        });
      }else{
        console.log('warning: Menu has a child which is not a MenuItem component');
      }
    });
  }
  return (
    <ul className={classes} style={style} data-testid='test-menu'>
      {/* 传递上下文给子组件 */}
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};

export default Menu;
