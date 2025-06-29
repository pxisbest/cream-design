import Alert from "./components/Alert/alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
import { library } from "@fortawesome/fontawesome-svg-core";
import Icon from "./components/Icon/icon";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import Button from "./components/Button/button";

import { useState } from "react";
import Transition from "./components/Transition/transition";

function App() {
  const [show, setshow] = useState(false);
  return (
    <>
      <Button size="lg" onClick={() => setshow(!show)}>
        toggle
      </Button>
      <Transition in={show} timeout={300} animation="zoom-in-top">
        <div>
          <p>Edit</p>
          <p>Edit</p>
          <p>Edit</p>
          <p>Edit</p>
        </div>
      </Transition>

      <Transition wrapper in={show} timeout={300} animation="zoom-in-top">
      <Button btnType="primary" size='lg'>Large Button</Button>
    </Transition>
    </>
   
  );
}

export default App;
