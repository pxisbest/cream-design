import React from "react";
import classNames from "classnames";
import { useState, createContext } from "react";
import { render } from '@testing-library/react';
import type { MenuItemProps } from './menuItem';

type MenuMode = "horizontal" | "vertical";
//onSelect?用了两次，可以直接写成一个type简化
type SelectCallback = (selectedIndex: number) => void;
export interface MenuProps {
  defaultIndex?: number; //是否高亮
  className?: string;
  mode?: MenuMode; //菜单模式
  style?: React.CSSProperties; //样式
  onSelect?: SelectCallback; // 选中某一项时的回调
  children?: React.ReactNode; //子元素
}

//要传递什么给子组件
interface IMenuContext {
  index: number; //当前选中项的索引
  onSelect?: SelectCallback;
}
//创建上下文
export const MenuContext = createContext<IMenuContext>({ index: 0 });

const Menu: React.FC<MenuProps> = (props) => {
  const {
    className,
    mode = "horizontal", //默认horizontal
    style,
    defaultIndex = 0,
    onSelect,
    children,
  } = props;
  //子组件切换需要改变状态
  const [currentActive, setActive] = useState(defaultIndex);
  const classes = classNames("cream-menu", className, {
    //如果 mode 是 vertical，就会加上 menu-vertical。
    [`menu-vertical`]: mode === "vertical",
    [`menu-horizontal`]: mode !== "vertical",
  });
  const handleClick = (index: number) => {
    setActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };
  const passedContext: IMenuContext = {
    index: currentActive,
    onSelect: handleClick,
  };
  const renderChildren = () => {
    //传入了children
    return React.Children.map(children, (child, index) => {
      //确保子元素是MenuItem
      const childElement = child as React.ReactElement<MenuItemProps>;
      if (childElement.type && (childElement.type as any).displayName === "MenuItem"||"SubMenu") {
        return React.cloneElement(childElement, {
          index
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
