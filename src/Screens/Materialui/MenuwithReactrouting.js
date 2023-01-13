import React,{useState} from 'react'
import {Menu,MenuItem,Button     } from "@mui/material";
import {Link,Route,BrowserRouter as Router,Routes} from 'react-router-dom'
const MenuwithReactrouting = () => {
    const[openMenu,setOpenMenu] = useState(null)
    const OpeneMenu = () =>{
        setOpenMenu(true)
    }
    const CloseMenu = () =>{
        setOpenMenu(false)
    }
  return (
    <Router>
        <Button onClick={OpeneMenu }>Open Menu's</Button>
        <Menu open={openMenu} onClose={CloseMenu}>
            <MenuItem onClose={CloseMenu}><Link to="/">Hello</Link></MenuItem>
            <MenuItem onClose={CloseMenu}><Link to="/how">How</Link></MenuItem>
            <MenuItem onClose={CloseMenu}><Link to="/hey">Hey</Link></MenuItem>
        </Menu>
        {/* <Route  path="/hello" >
         <Hello/>
        </Route>
        <Route  path="/how" >
         <How />
        </Route>
        <Route path="/hey" >
         <Hey/>
        </Route> */}

        <Routes>
            <Route path="/" element={ <Hello/>} />
            <Route path="/how" element={<How />} />
            <Route path="/hey" element={ <Hey/>} />
          </Routes>
    </Router>
  )
}

export default MenuwithReactrouting


const Hello = () =>{
    return(<h1>Hello Page</h1>)
}

const How = () =>{
    return(<h1>How Page</h1>)
}
const Hey = () =>{
    return(<h1>Hay Page</h1>)
}