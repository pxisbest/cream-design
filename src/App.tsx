import Button, { ButtonSize, ButtonType } from "./components/Button/button";

function App() {
  return (
    <>
      <Button disabled>Hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
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
