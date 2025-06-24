import Button, { ButtonType } from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";

function App() {
  return (
    <>
      <Menu defaultIndex={0} onSelect={(index)=>{alert(index)}}>
        <MenuItem index={1}>Cool Link</MenuItem>
        <MenuItem index={2}>Cool Link2</MenuItem>
        <MenuItem index={3}>Cool Link 3</MenuItem>
        <MenuItem index={2}>Active</MenuItem>
        <MenuItem index={0}>Active</MenuItem>
      </Menu>

      <Button disabled>Hello</Button>
      <Button btnType={ButtonType.Primary} size={"lg"}>
        Hello
      </Button>
      <Button btnType={ButtonType.Danger}>Danger Button</Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com">
        Baidu
      </Button>
      <Button
        btnType={ButtonType.Link}
        disabled={true}
        href="http://www.baidu.com"
      >
        Disabled Link
      </Button>
    </>
  );
}

export default App;
