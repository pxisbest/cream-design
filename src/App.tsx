import Alert from "./components/Alert/alert";
// import Menu from "./components/Menu/menu";
// import MenuItem from "./components/Menu/menuItem";
// import SubMenu from "./components/Menu/subMenu";
// import type from '@testing-library/react';

function App() {
  return (
    <>
    <Alert type={"success"} title="this is alert"></Alert>
    <Alert type={"warning"} title="this is alert" description="hi" closable={false}></Alert>
      {/* <Menu
        mode="vertical"
        defaultIndex="0"
        defaultOpenSubMenus={["2"]} //默认展开的子菜单
        onSelect={(index) => {
          alert(index);
        }}
      >
        <MenuItem>Cool Link</MenuItem>
        <MenuItem>Cool Link2</MenuItem>
        <SubMenu title="Dropdown" index="1">
          <MenuItem>dropdown1</MenuItem>
          <MenuItem>dropdown2</MenuItem>
          <MenuItem>dropdown3</MenuItem>
        </SubMenu>
        <MenuItem>Cool Link 3</MenuItem>
        <MenuItem>Active</MenuItem>
      </Menu> */}

    </>
  );
}

export default App;
