import { AppBar, Toolbar } from "@mui/material";
import logo from "../assets/logo.png"


export default function Header() {
  return (
    <AppBar color="secondary" position="static">
      <Toolbar>
        <img src={logo} alt="logo" style={{width:120}}/>
      </Toolbar>
    </AppBar>
  );
}
