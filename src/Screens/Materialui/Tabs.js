import React,{useState} from 'react'
import {Tabs,Tab,AppBar } from "@mui/material";
import { Phone,PersonPinIcon } from '@mui/icons-material';
const TabScreen = () => {
    const [value,setValue] = useState(0)
    const handleTabs =(e,val) =>{
      console.log(val)
      setValue(val)
    }
  return (
    <div>
    {/* <AppBar position='static' > */}
        <Tabs value={value}  onChange={handleTabs}>
            <Tab icon={<Phone />} label="Item 1"/>
            <Tab icon={<Phone />}label="Item 2"/>
            <Tab icon={<Phone/>} label="Item 3"/>
        </Tabs>
    {/* </AppBar> */}
    <TabPanelOne value={value} index={0}>Item 1 Detail</TabPanelOne>
    <TabPanelOne value={value} index={1}>Item 2 Detail</TabPanelOne>
    <TabPanelOne value={value} index={2}>Item 3 Detail</TabPanelOne>
    </div>
  )
}

export default TabScreen



const TabPanelOne = (props) =>{
    const{children,index,value} = props
   return(
    <div>
        {
            value === index &&(
                <h1>{children}</h1>
            )
        }
    </div>
   )
}

