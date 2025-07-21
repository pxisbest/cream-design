import Menu, { type MenuProps } from './menu'
import SubMenu, { type SubMenuProps } from './subMenu'
import MenuItem, { type MenuItemProps } from './menuItem'

//新建一个类型，包含MenuProps和MenuItemProps（交叉类型）
export type IMenuComponent = React.FC<MenuProps> & {
  Item: React.FC<MenuItemProps>,
  SubMenu: React.FC<SubMenuProps>
}
const TransMenu = Menu as IMenuComponent

TransMenu.Item = MenuItem
TransMenu.SubMenu = SubMenu

export default TransMenu