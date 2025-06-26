import Button, { ButtonType } from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";

function App() {
  return (
    <>
      <Menu mode="vertical"
        onSelect={(index) => {
          alert(index);
        }}
      >
        <SubMenu title="Dropdown">
        <MenuItem>dropdown1</MenuItem>
        <MenuItem>dropdown2</MenuItem>
        <MenuItem>dropdown3</MenuItem>
        </SubMenu>
        <MenuItem>Cool Link</MenuItem>
        <MenuItem>Cool Link2</MenuItem>
        <MenuItem>Cool Link 3</MenuItem>
        <MenuItem>Active</MenuItem>
      </Menu>
    </>
  );
}

export default App;
